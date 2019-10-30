// Wait for DOM to load in
window.onload = () => {
    // Get the main game container
    const main = document.querySelector("#main");

    // Create new Color Match game
    window.cm = new ColorMatch(main);
};