const ele = (el) => document.querySelector(el);

const $online = ele("#online");
const $offline = ele("#offline");

$online.style.display = "none";
$offline.style.display = "none";

const socket = io();

socket.on("connect", () => {
   $online.style.display = "inline";
   $offline.style.display = "none";
});

socket.on("disconnect", () => {
   $online.style.display = "none";
   $offline.style.display = "inline";
});
