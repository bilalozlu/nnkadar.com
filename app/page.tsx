"use client";
import logo from './logo.png';
import phone_splash from './phone_splash.png';
import login_screen from './login_screen.png'
import app_store from './app_store.svg';
import play_store from './play_store.svg';

import React, { useEffect, useState } from 'react';
import './page.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string |null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  
  return (
    <div className="app">
      <nav className="navbar">
        <div>
          <img src={logo.src} height={80}/>
        </div>
        <div className="links">
          <div className={activeSection === 'uygulama' ? 'active' : ''}>
            <a href="#uygulama">Uygulama</a>
          </div>
          <div className={activeSection === 'hakkinda' ? 'active' : ''}>
            <a href="#hakkinda">Hakkında</a>
          </div>
          <div className={activeSection === 'iletisim' ? 'active' : ''}>
            <a href="#iletisim">İletişim</a>
          </div>
        </div>
      </nav>

      <div className="sections">
        <section id="uygulama" className="section">
          <div className="download-app">
            <h1>
            Merak ettiğin her fiyat nnkadar'da
            </h1>
            <p>Andorid ve IOS için hemen indir</p>
            <div className='store-icons'>
              <a href="https://play.google.com/store/apps/details?id=com.bilal.ozlu.nnkadar" style={{padding:0, marginRight: 30}}>
                <img src={play_store.src} height={180}/>
              </a>
              <a href="https://apps.apple.com/tr/app/nnkadar/id6642640210" style={{padding:0}}>
                <img src={app_store.src} height={205}/>
              </a>
            </div>
          </div>
          <img src={phone_splash.src} className="splash-screen"/>
        </section>
        <section id="hakkinda" className="section">
          <div className='about-left'>
          <p className='bullet'>⦿ Merak ettiğiniz her şeyin fiyatından haberdar olun</p>
            <p className='bullet'>⦿ Kolayca randevu alın</p>
            <p className='bullet'>⦿ İşletmenizi ücretsiz kaydedin</p>
            <p className='bullet'>⦿ Tüm Türkiye'de görünür olun</p>
          </div>
          <img src={login_screen.src} className="about-phone"/>
          <div className='about-right'>
            <p className='bullet'>⦿ Anında On Binlerce kullanıcıya ulaşma imkanı yakalayın</p>
            <p className='bullet'>⦿ Dijital kolay randevu ile statü atlayın</p>
            <p className='bullet'>⦿ Rakiplerinize fark atın, geç kalmayın</p>
            <p className='bullet'>⦿ Hızlı, güvenli, pratik, kullanışlı</p>
          </div>
        </section>
        <section id="iletisim" className="section">
          <p>📞 05518895522</p>
          <p>📧 nnkadar2024@gmail.com</p>
        </section>
      </div>
    </div>
  );
}
