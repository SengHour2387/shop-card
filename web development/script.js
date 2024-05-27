/*function openPanel() {
    document.getElementById("panel").style.left = 0;
*/
function openPanel() {
    document.documentElement.style.setProperty('--hidepanel' , '0')
}
function closePanel() {
    document.documentElement.style.setProperty('--hidepanel' ,'-100%')
}