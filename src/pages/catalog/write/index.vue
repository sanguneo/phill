<template>
  <div class="container">
    <div class="pageTitle"></div>
    <div class="label">제목</div>
    <input id="title" v-model="title" type="text" name="title" />
    <div class="label">이미지</div>
    <ul class="images">
      <li class="addImage"><label>+<input id="imageInput" type="file" @change="addImage" /></label></li>
      <li v-for="(image, idx) in images" :class="{rep: idx === rep}" :style="{backgroundImage: `url(${image[1]})`}">
        <div class="useImage" @click="useImage(image[0])"></div>
        <div class="repImage" @click="repImage(image[0])">대표</div>
        <div class="delImage" @click="delImage(image[0])">&times;</div>
      </li>
    </ul>
    <div class="label">내용</div>
    <textarea id="content" v-model="content" name="content" />
    <div class="label">태그</div>
    <ClientOnly>
      <vue-tags-input
        v-model="tag"
        placeholder="#제외 공백 없이 입력 후 엔터(10개 이하)"
        :tags="tags"
        :max-tags="10"
        @max-tags-reached="maxTagReached"
        @before-adding-tag="(obj) => {obj.tag.text = obj.tag.text.replace(/ /g,'').replace(/\:/g,'').replace(/;/g,'').replace(/,/g,'');obj.addTag();}"
        @tags-changed="newTags => tags = newTags ">
        <div slot="tag-right" slot-scope="props" class="tag-right-slot" @click="removeTag(props.index)" />
      </vue-tags-input>
    </ClientOnly>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid';
import { firestore, storageRef } from '../../../shared/firebase';

export default {
  name: 'Item',
  components: {
  },
  data: () => ({
    title: '',
    content: '',
    images: [],
    tags: [],
    itemcode: '000001',
    // //
    rep: 0,
    tag: '',
  }),
  computed: {
    user() {
      return this.$store.getters['user/user'];
    },
  },
  mounted() {
    // setTimeout(() => this.submit(), 10000);
  },
  methods: {
    maxTagReached(tag) {
      console.log(tag, '태그는 10개 이하여야 합니다.');
    },
    removeTag(idx) {
      this.tags.splice(idx, 1);
    },
    addImage(event) {
      const { target: { files: [file] } } = event;
      this.images.push([`image/content/${uuid()}.${file.name.split('.').pop()}`, URL.createObjectURL(file), file]);
      event.target.value = '';
    },
    useImage(target) {
      console.log(target);
    },
    delImage(target) {
      const index = this.images.findIndex(([filename]) => filename === target);
      URL.revokeObjectURL(this.images[index][1]);
      this.images.splice(index, 1);
    },
    repImage(target) {
      const index = this.images.findIndex(([filename]) => filename === target);
      this.rep = index;
    },
    submit() {
      this.images.map(([path, _, file]) => storageRef.child(path).put(file));
      firestore().collection('index')
        .doc('catalog')
        .get()
        .then((doc) => {
          const id = doc.data().id + 1;
          Promise.all([
            firestore().collection('catalog')
              .doc(`${id}`)
              .set({
                title: this.title,
                content: this.content,
                thumbnail: this.images[this.rep][0],
                images: this.images.map(([path]) => path),
                tags: this.tags.map(({ text }) => text),
                created: new Date().getTime(),
                updated: null,
                user: this.user.id,
              }),
            ...this.images.map(([path, _, file]) => storageRef.child(path).put(file)),
            firestore().collection('index')
              .doc('catalog')
              .update({ id }),
          ]).then(() => {
            this.$router.push(`/catalog/${id}`);
          });
        });
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: calc(100% - 50px);
  width: 1024px;
  margin: 0 calc(50% - 512px);
  padding: 0 40px;
  & > .label {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  & > input, & > textarea, & > button {
    border: 1px solid #d0d0d0;
    max-width: unset;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    padding: 0 5px;
    font-size: 13px;
  }
  & > .vue-tags-input{
    max-width: unset;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    & > div {
      border: 1px solid #d0d0d0;
    }
  }
  & > textarea {
    min-height: 400px;
    padding: 5px;
  }
  #imageInput {
    display: none;
  }
  .images {
    list-style: none;
    padding: 0;
    margin-bottom: 10px;
    li {
      position: relative;
      width: 64px;
      height: 64px;
      background-size: contain;
      & > .delImage {
        position: absolute;
        padding:0;
        margin: 0;
        top: 0;
        right: 0;
        width: 16px;
        height: 16px;
        line-height: 12px;
        font-size: 20px;
        color: white;
        text-align: center;
        background-color: #7F828B;
      }
      & > .repImage {
        position: absolute;
        padding:0;
        margin: 0;
        left: 0;
        bottom: 0;
        width: 32px;
        height: 16px;
        font-size: 10px;
        color: white;
        text-align: center;
        background-color: #7F828B;
        opacity: .9;
      }
      &.rep > .repImage {
        opacity: 1;
        background-color: cornflowerblue;

        font-weight: bold;
      }
    }
    .addImage {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      background-color: #d9d9d9;
      color: white;
      font-weight: bold;
    }
  }
}
</style>

