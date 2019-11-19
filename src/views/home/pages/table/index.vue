<template>
  <div class="mytable">
    <ul>
      <li v-for="item in studentData" :key="item.id">
        <a-checkbox @change="onChange" :checked="item.ischecked" :value="item.id">{{item.name}}<i class="tips">这是一个测试</i></a-checkbox>
      </li>
    </ul>
    <span>
      <template v-for="item in selectId" >
         <i  v-if="item" :key="item.id">{{item.name}}</i>
      </template>

     
    </span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      studentData:[
        {
          id:1,
          name:'王腾',
          ischecked: false
        },
        {
          id:2,
          name:'王二小',
          ischecked: false
        },
        {
          id:3,
          name:'王大拿',
          ischecked: false
        },
        {
          id:4,
          name:'王大拿2',
          ischecked: false
        }
      ],
      selectId:[]
    }
  },
  methods: {
    onChange(e){
      let {checked,value} = e.target;
      this.studentData.forEach(item=>{
        if(value === item.id){
          item.ischecked = checked;
          if(checked){
            this.selectId.push(item)
          }else{
            this.selectId.forEach((itemobj,index)=>{
              if(itemobj.id === value){
                this.selectId.splice(index,1)
              }
            })
          }
        }
      });

    }
  },
  computed: {
    // selectId:function(){
    //   return this.studentData.map(item=>{
    //     if(item.ischecked){
    //       return item;
    //     }
    //   })
    // }
  }
}
</script>

<style lang="less" scoped>
  .mytable{
    width: 100%;
    height: 1000px;
  }
  .tips{
    font-size: 12px;
    margin-left: 20px;
    color: red;
    border: 1px solid #e0e0ee;
  }
</style>