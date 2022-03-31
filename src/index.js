import { vlad } from './example'
import showInfo from './example'
import './styles/main.scss'
import './styles/style.css'
import exampleImg from './assets/example.svg'

import 'bootstrap';
import 'jquery';

const exlImg = document.getElementById('main-img')
exlImg.src = exampleImg
exlImg.width = '200'

const exlTitle = document.getElementById('title')
exlTitle.textContent = showInfo(vlad)