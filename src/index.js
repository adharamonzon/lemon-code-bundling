import { getAvg } from './averageService';
import './main.scss';
import logoImg from './img/logo_2.png';

const scores = [39, 32, 98, 73, 12, 82, 58];
const averageScore = getAvg(scores);

const messageToDisplay = `average score ${averageScore}`;

document.write(messageToDisplay);
