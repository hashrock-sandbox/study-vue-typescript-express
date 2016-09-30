import Component from 'vue-class-component'
import * as Vue from 'vue'
import axios from "axios"

interface ApiResponse{
  msg: string
}

@Component({
  props: {
  },
  template: `
  <div>
    <div>Hello, Vue!</div>
    <h2>Ajax request</h2>
    <div>msg: {{msg}}</div>
  </div>
  `
})
export class ViewMain extends Vue {
  msg: string

  data():any{
    return {
      msg: ""
    }
  }
  ready(){
    axios.get("/api").then((res)=>{
      var api:ApiResponse = res.data;
      this.msg = api.msg
    })
  }
}
