<script type="text/javascript">
(function(){
	var hexacode = ['#ffff00', '#b71c1c', '#304ffe', '#4e342e', '#e040fb'],
	el = document.getElementById('autocolor').style,
	counter = -1,
	hexalen = hexacode.length;
	function auto(){
		el.color = hexacode[counter = ++counter % hexalen];
	}
	setInterval(auto, 650);
})();
</script>