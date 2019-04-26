import blog from '@/api/blog'

export default {
    data () {
      return {
        title:'',
        description:'',
        content:'',
        atIndex:''
      }
    },
    methods:{
      onCreate(){
        blog.createBlog({title:this.title,content:this.content,description:this.description,atIndex:this.atIndex})
        .then(res => {
          this.$message.success(res.msg)   //提示创建成功
          this.$router.push({path:`/detail/${res.data.id}`})   //跳转到博客详情页面
        })
      }
    }
  }