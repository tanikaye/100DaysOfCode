var maxArea = function(height) {
  let left = 0
  let right = height.length-1
  let maxVol = 0
  while(left < right){
      let minHeight = Math.min(height[left], height[right])
      console.log("min height ", minHeight)
      let volume = minHeight * (right-left)
      maxVol = Math.max(maxVol, volume)
      console.log(maxVol)
      if(minHeight === height[left]){
          left++
          continue;
      } if(minHeight === height[right]){
          right--
          continue;
      }
  }
  return maxVol
};