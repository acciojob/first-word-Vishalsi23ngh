function firstWord(s) {
  // your code here
	let ans = "";
	for(let i = 0; i < s.length(); i++){
		let val = s.charAt(i);
		if(!isNaN(val) && val != " "){
			ans += val;
		}else{
			break;
		}
	}
	return ans;
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
