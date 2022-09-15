<template>
  <div class="hello">
    <h1>特性列表</h1>
    <div>
      <input type="text" placeholder="输入新特性" @keyup.enter="addFeature" />
    </div>
    <ul>
      <li
        v-for="feature in features"
        :key="feature.id"
        :class="{ selected: feature.selected }"
      >
        {{ feature.name }}
      </li>
      <li>特性数量：{{count}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

type Feature = {
  id: number;
  name: string;
};

type FeatureSelect = Feature & { selected: boolean };

export default class HelloWorld extends Vue {

  features: FeatureSelect[] = [];

  created() {
    this.features = [
      {
        id: 1,
        name: "类型注解",
        selected: true,
      },
      {
        id: 1,
        name: "编译型语言",
        selected: false,
      },
    ]
  }

  addFeature(e: KeyboardEvent) {
    // e.target 是 EventTarget 类型，需要断言为 HTMLInputElement
    const inp = e.target as HTMLInputElement;
    const feature: FeatureSelect = {
      id: this.features.length + 1,
      name: inp.value,
      selected: false,
    };
    this.features.push(feature);
    inp.value = "";
  }

  // 定义getter作为计算属性
  get count() {
    return this.features.length;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.selected {
  background-color: #42b983;
}
</style>
