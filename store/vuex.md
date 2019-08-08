# **获取store中数据**

### 1.this.$store.xxx.count

```javascript
//定义
const user = { 
  state:{
    count:0
  }
}

//使用
created(){ 
  console.log(this.$store.xxx.count)
}
```

### 2.import { mapState} from 'vuex'

```javascript
//定义
const user = { 
  state:{
    count:0
  }
}

//使用
import { mapState } from 'vuex'  

computed:{
   ...mapState(['home'])
}
created(){
  console.log(this.home)
}
```

### 3. 定义使用getters

```javascript
//定义
const user = { 
  state:{
    count:0
  }
}

//使用
created(){
  console.log(this.$store.getters.名称)
}
```

# 修改 store中数据

### **1.mutations**

```javascript
//定义
const user = {
  state:{
    count:0
  },
  mutations:{
    方法名(state,可加参数){  
      state.count++
    }
  }
}

//调用
import { mapMuations } from 'vuex'
methods:{
  ...mapMuations(['方法名'])
}
created(){
  this.方法名('可以加参数')
}
```

### 2.this.$store.commit('mutations方法名',可选参数)

```javascript
//定义
const user = {
  state:{
    count:0
  },
  mutations:{
    方法名(state,可加参数){  
      state.count++
    }
  }
}

//调用
created(){
  this.$store.commit('mutations方法名',可选参数)
}
```

### 3.mutations + actions 使用`mapGetters` ``异步``来映射为计算属性



```javascript
const user = {
  state:{
    count:0
  },
  actions:{  //定义
    fn({commit}){  // fn(state) => state.commit('方法名)  简写  {commit}
      commit('ADDHOME')
    }
  },
  mutations:{
    ADDHOME(state){
      state.count++
    }
  }
}


```

#### 异步调用方式1：

```javascript
created(){
  this.$store.dispatch('Action方法名称', 可选参数)  //此方法专门调用异步方法
}
```



#### 异步调用方式2：

```javascript

import {mapActions} from 'vuex'

methods:{
  ...mapActions(['actions方法名'])
}

created(){
  this.actions方法名('可选参数')
}
```



