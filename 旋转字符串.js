// 字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。
		// 示例1:

		// 输入：s1 = "waterbottle", s2 = "erbottlewat"
		// 输出：True
		// 示例2:

		// 输入：s1 = "aa", s2 = "aba"
		// 输出：False
		// 提示：

		// 字符串长度在[0, 100000]范围内。
		// 说明:

		// 你能只调用一次检查子串的方法吗？

		/**
		 * @param {string} s1
		 * @param {string} s2
		 * @return {boolean}
		 */
     var isFlipedString = function(s1, s2) {
      if(s1.length == s2.length){
        if(s1.length == 0 && s2.length == 0){
          return true
        }
        s1 = Array.from(s1)
        s2 = Array.from(s2)
        let res = s1.some((item,index )=>{
            let arr = s1.slice(index)
            let arr2 = arr.concat(s1.slice(0,index))
            let c = arr2.toString() === s2.toString();
            return c
        })
        return res
      }else{
        return false
      }
  };