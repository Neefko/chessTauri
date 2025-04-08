const { invoke } = window.__TAURI__.core;
const { emit } = window.__TAURI__.event;

async function closeWindow() {
  await invoke("close_window");
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#close-btn").addEventListener("click", () => {
    closeWindow();
  });
});