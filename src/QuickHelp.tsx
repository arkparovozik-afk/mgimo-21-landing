import {useState} from 'react';
import {MessageCircle, X} from 'lucide-react';
const answers = [
  ['Как поступить?', 'По опубликованным условиям нужны диплом о высшем образовании, мотивационное эссе и собеседование. Условия нового набора уточняйте в приёмной комиссии.'],
  ['Сколько стоит?', 'На 2026/27 учебный год: 330 000 ₽ за семестр, или 660 000 ₽ в год. Стоимость следующего набора уточняется.'],
  ['Как проходит учёба?', 'Два года, очная форма с гибридным обучением. По опубликованным условиям очный интенсив проходит в Москве раз в семестр.'],
  ['Как связаться?', 'Позвоните в МГИМО-Одинцово по телефону +7 (495) 630-06-04 или напишите организаторам на Mgimo_edu@21-school.ru.']
];
export function QuickHelp(){const [open,setOpen]=useState(false);const [answer,setAnswer]=useState('Выберите вопрос — покажем краткий ответ. Если нужен ответ сотрудника, позвоните или напишите организаторам.');return <aside className="quick-help"><button type="button" className="chat-trigger" aria-expanded={open} aria-controls="quick-help-panel" onClick={()=>setOpen(!open)}>{open?<X size={20}/>:<MessageCircle size={20}/>}<span>{open?'Закрыть':'Задать вопрос'}</span></button>{open&&<div className="chat-panel" id="quick-help-panel" aria-label="Помощник по программе"><div className="chat-title"><strong>Помощник по программе</strong><span>Быстрые ответы на частые вопросы</span></div><p className="chat-answer" aria-live="polite">{answer}</p><div className="chat-questions">{answers.map(([q,a])=><button type="button" key={q} onClick={()=>setAnswer(a)}>{q}</button>)}</div><a href="tel:+74956300604">Позвонить в МГИМО-Одинцово</a><a href="mailto:Mgimo_edu@21-school.ru">Написать организаторам</a></div>}</aside>}
