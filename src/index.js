import "./css/main.scss";
import { Modals } from "./libs/modals";

const modalContent = new Modals(".modals", ".modals__content" , ".modals-toggler");
modalContent.render()

