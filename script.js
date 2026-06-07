        document.addEventListener("DOMContentLoaded", () => {
            console.log("Bootstrap 5.3 Starter Kit Loaded");

            const testBtn = document.getElementById("testBtn");

            if (testBtn) {
                testBtn.addEventListener("click", () => {
                    alert("JavaScript is working!");
                });
            }
        });