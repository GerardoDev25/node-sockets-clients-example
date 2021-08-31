const ele = (el) => document.querySelector(el);

const $online = ele("#online");
const $offline = ele("#offline");

const $txtMessage = ele("#txtMessage");
const $btnSend = ele("#btnSend");

// !------------------------------------------

$online.style.display = "none";
$offline.style.display = "none";

const socket = io();

// * get payload the other clients
socket.on("send-message", (payload) => {
   console.log(payload);
});

// * when the client connect
socket.on("connect", () => {
   $online.style.display = "inline";
   $offline.style.display = "none";
});

// * when the client disconnect
socket.on("disconnect", () => {
   $online.style.display = "none";
   $offline.style.display = "inline";
});

$btnSend.addEventListener("click", () => {
   const message = $txtMessage.value;

   const payload = {
      message,
      id: "1234",
      date: new Date().getDate(),
   };

   $txtMessage.value = "";

   socket.emit("send-message", payload, (id) => {
      console.log("desde el server: ", id);
   });
});
