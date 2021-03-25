
const SetupCardandModal = function (Card) {
    const ModalLink = Card.querySelector('a')
    const Modal = Card.querySelector('.PopUp')
    const ModalxButton = Modal.querySelector('span')
    ModalLink.onclick = () => {
        Modal.style.display = 'block'
        ModalxButton.onclick = () => Modal.style.display = 'none'
        window.onclick = function (event) {
            if (event.target === Modal) {
                Modal.style.display = 'none'
            }
        }
    }
}

const ProjectBabyCard = document.getElementById('ProjectBabyCard')
const ProjectLifeCard = document.getElementById('ProjectLifeCard')

SetupCardandModal(ProjectBabyCard)
SetupCardandModal(ProjectLifeCard)







// SERVICES
// SERVICES
// SERVICESS
//$(document).ready(function () {
//    $("#AppDevelopmentButton").click(function () {
//        $(".AppDevelopment").fadeIn("slow");
//    });
//});