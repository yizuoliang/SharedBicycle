export default{
    formateDate(time){
      if(!time){
        return '1978-08-08 12:59:59';
      }
      let date=new Date(time);
      return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDay()+" "+date.getHours()
        +":"+date.getMinutes()+":"+date.getSeconds();
    }

}