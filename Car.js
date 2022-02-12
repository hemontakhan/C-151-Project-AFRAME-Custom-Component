AFRAME.registerComponent('car-rotation',{
  schema:{
      rotate: {type:'number' , default:0}
  },

 tick: function(){
  var rot = this.el.getAttribute('rotation')
 
  rot.z = rot.z+ 0.1
 
  this.el.setAttribute('rotation',{x : rot.x,y: rot.y, z: rot.z})
}
})