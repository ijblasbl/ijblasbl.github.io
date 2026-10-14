/* No dependencies, network requests, cookies or browser storage. */
(() => {
  'use strict';
  const translations = {
    fr: {
      skip: 'Aller au contenu', navigation: 'Navigation principale', chooseLanguage: 'Choisir la langue', homeLink: 'IJBLux accueil',
      openMenu: 'Ouvrir la navigation', closeMenu: 'Fermer la navigation',
      navAbout: 'L’association', navFocus: 'Nos priorités', navWork: 'Nos activités', navBoard: 'Notre conseil', navContact: 'Nous contacter',
      heroEyebrow: 'Une nouvelle association. Un objectif commun.', heroLine1: 'Grandir ensemble.', heroLine2: 'Trouver sa place.',
      heroDescription: 'Nous rapprochons les personnes grâce à l’éducation, la compréhension interculturelle et la participation. Ancrés au Luxembourg. Ouverts sur le monde.',
      heroAction: 'Découvrir l’association', heroContact: 'Échangeons', heroCaption: 'Un moment de notre café linguistique.',
      location: 'Basée à Oberkorn, au Luxembourg', nonprofit: 'Association sans but lucratif · a.s.b.l.', established: 'Fondée en 2026',
      aboutLabel: 'L’association', aboutTitle: 'Les possibilités naissent de la rencontre.',
      aboutLead: 'Internationaler Jugend- und Bildungsverein Luxembourg a.s.b.l. est une association sans but lucratif qui soutient la jeunesse, l’apprentissage et la coopération au Luxembourg et à l’international.',
      aboutBody: 'Notre objectif est de favoriser le développement personnel, social et professionnel, la compréhension interculturelle et la participation active à la société. Nous accordons une attention particulière aux jeunes et aux personnes ayant moins de possibilités de participer.',
      aboutPrinciple: 'Plus de possibilités d’apprendre. Plus de façons de participer. Plus de liens entre les cultures.',
      focusLabel: 'Nos priorités', focusTitle: 'De petits débuts. De belles perspectives.',
      focusIntro: 'Ces domaines guident notre travail et les initiatives que nous souhaitons développer, en accord avec notre objet fondateur.',
      focus1Title: 'Éducation et jeunesse',
      focus1Body: 'Des ateliers, des formations et des ressources pédagogiques pour soutenir le développement personnel, social et professionnel des jeunes et des bénévoles.',
      focus2Title: 'Culture et échanges',
      focus2Body: 'Des échanges de jeunes, des activités culturelles et des rencontres qui favorisent le dialogue et la compréhension entre les personnes de différents horizons.',
      focus3Title: 'Inclusion et participation',
      focus3Body: 'Des initiatives sociales et locales, avec une attention particulière aux personnes qui rencontrent des obstacles à la participation.',
      focus4Title: 'Environnement et numérique',
      focus4Body: 'Des initiatives éducatives, environnementales et numériques, ainsi que des études, des publications et le partage des résultats de projets.',
      cooperation: 'Nous souhaitons collaborer avec des écoles, des universités, des organismes publics, des associations, des fondations et d’autres partenaires au Luxembourg et à l’étranger.',
      workLabel: 'Projets et activités', workTitle: 'Notre mission prend vie.', workIntro: 'Quelques moments de nos activités, partagés sur la page Instagram de l’association.',
      workPrintingCategory: 'Éducation et créativité numérique', workPrintingTitle: 'Découvrir l’impression 3D', workPrintingBody: 'Un atelier d’impression 3D avec des jeunes : apprendre, créer et donner vie à l’imagination.',
      workPrintingAlt: 'Des jeunes participent à un atelier avec une imprimante 3D et un écran de démonstration.', workPrintingLink: 'Voir l’atelier d’impression 3D sur Instagram',
      workLanguageCategory: 'Langues et rencontres', workLanguageTitle: 'Notre café linguistique démarre', workLanguageBody: 'Un premier aperçu de notre café linguistique, où les rencontres et la conversation rapprochent les personnes.',
      workLanguageAlt: 'Une intervenante présente IJBLux à des participants réunis autour d’une table au café linguistique.', workLanguageLink: 'Voir le café linguistique sur Instagram',
      workCreativeCategory: 'Culture et communauté', workCreativeTitle: 'Des actions locales en mouvement', workCreativeBody: 'Art, musique, danse et communauté : un aperçu de nos activités créatives locales.',
      workCreativeAlt: 'Quatre participants devant une fresque colorée et une affiche IJBLux, l’un tenant un ukulélé.', workCreativeLink: 'Voir les activités créatives locales sur Instagram',
      workPostLink: 'Voir la publication originale', workFollowIntro: 'Suivez nos prochaines initiatives.', instagramLink: 'Visiter IJBLux sur Instagram', instagramOfficial: 'Notre compte Instagram officiel',
      boardLabel: 'Notre conseil', boardTitle: 'Les personnes qui portent notre mission.', boardIntro: 'Notre conseil d’administration fondateur, nommé le 15 août 2026.',
      president: 'Président', vicePresident: 'Vice-président', deputyPresident: 'Président suppléant',
      contactLabel: 'Nous contacter', contactTitle: 'Tout commence par une conversation.',
      contactIntro: 'Vous souhaitez en savoir plus sur notre mission, devenir membre ou envisager une collaboration ? Nous serions heureux d’échanger avec vous.',
      emailHint: 'Écrire à l’association', registeredOffice: 'Siège social', registration: 'Immatriculation', founded: 'Fondation', foundationDate: '15 août 2026',
      backTop: 'Haut de page', legalTitle: 'Informations sur l’association',
      legalDates: 'Fondée le 15 août 2026. Immatriculée le 3 septembre 2026.', legalRepresentative: 'Représentée par son président, Vidit Goyal.',
      privacyTitle: 'Confidentialité',
      privacyBody: 'Ce site n’utilise ni outils d’analyse, ni cookies publicitaires, ni services tiers intégrés, ni formulaires de contact. Le choix de langue s’applique uniquement à la page actuelle et n’est pas enregistré.',
      privacyHost: 'Lorsqu’il est hébergé sur GitHub Pages, l’hébergeur traite les données techniques des requêtes conformément à sa propre déclaration de confidentialité. Pour toute question concernant des informations partagées par e-mail, contactez ijblasbl@gmail.com.',
      privacyLink: 'Déclaration de confidentialité de GitHub ↗', footerNote: 'Jeunesse. Éducation. Rencontres.', announcement: 'La langue du site est maintenant le français.',
      pageTitle: 'IJBLux | Jeunesse, éducation et rencontres au Luxembourg',
      pageDescription: 'Internationaler Jugend- und Bildungsverein Luxembourg a.s.b.l. Une association luxembourgeoise pour la jeunesse, l’éducation, l’inclusion et la coopération internationale. RCS F15901.',
      socialDescription: 'Une nouvelle association luxembourgeoise qui rapproche les personnes grâce à l’éducation, la compréhension interculturelle et la participation.'
    },
    de: {
      skip: 'Zum Inhalt springen', navigation: 'Hauptnavigation', chooseLanguage: 'Sprache wählen', homeLink: 'IJBLux Startseite',
      openMenu: 'Navigation öffnen', closeMenu: 'Navigation schließen',
      navAbout: 'Über uns', navFocus: 'Schwerpunkte', navWork: 'Unsere Arbeit', navBoard: 'Unser Vorstand', navContact: 'Kontakt',
      heroEyebrow: 'Ein neuer Verein. Ein gemeinsames Ziel.', heroLine1: 'Wachsen dürfen.', heroLine2: 'Dazugehören.',
      heroDescription: 'Wir verbinden Menschen durch Bildung, interkulturelles Verständnis und Teilhabe. In Luxemburg verwurzelt. Offen für die Welt.',
      heroAction: 'Den Verein kennenlernen', heroContact: 'Ins Gespräch kommen', heroCaption: 'Ein Moment aus unserem Sprachcafé.',
      location: 'Mit Sitz in Oberkorn, Luxemburg', nonprofit: 'Vereinigung ohne Gewinnzweck · a.s.b.l.', established: 'Gegründet 2026',
      aboutLabel: 'Der Verein', aboutTitle: 'Chancen entstehen durch Begegnung.',
      aboutLead: 'Internationaler Jugend- und Bildungsverein Luxembourg a.s.b.l. ist eine Vereinigung ohne Gewinnzweck. Der Verein fördert junge Menschen, Bildung und Zusammenarbeit in Luxemburg und auf internationaler Ebene.',
      aboutBody: 'Unser Ziel ist es, die persönliche, soziale und berufliche Entwicklung, interkulturelles Verständnis und aktive gesellschaftliche Teilhabe zu fördern. Ein besonderer Schwerpunkt liegt auf jungen Menschen und Personen mit geringeren Teilhabechancen.',
      aboutPrinciple: 'Mehr Möglichkeiten zum Lernen. Mehr Wege zur Teilhabe. Mehr Verbindungen zwischen Kulturen.',
      focusLabel: 'Unsere Schwerpunkte', focusTitle: 'Kleine Anfänge. Große Möglichkeiten.',
      focusIntro: 'Diese Bereiche leiten unsere Arbeit und die Initiativen, die wir im Einklang mit unserem Gründungszweck entwickeln möchten.',
      focus1Title: 'Bildung und Jugendentwicklung',
      focus1Body: 'Workshops, Schulungen und Lehrmaterialien zur Unterstützung der persönlichen, sozialen und beruflichen Entwicklung junger Menschen und Freiwilliger.',
      focus2Title: 'Kultur und Austausch',
      focus2Body: 'Jugendaustausche, kulturelle Aktivitäten und Gemeinschaftsveranstaltungen, die Dialog und Verständnis zwischen Menschen unterschiedlicher Herkunft fördern.',
      focus3Title: 'Inklusion und Teilhabe',
      focus3Body: 'Soziale und gemeinschaftliche Initiativen mit besonderem Augenmerk auf Menschen, die Hindernisse bei der Teilnahme erleben.',
      focus4Title: 'Umwelt und Digitalprojekte',
      focus4Body: 'Bildungs-, Umwelt- und Digitalprojekte sowie Studien, Veröffentlichungen und die Verbreitung gemeinsamer Projektergebnisse.',
      cooperation: 'Wir möchten mit Schulen, Hochschulen, Behörden, Vereinigungen, Stiftungen und weiteren Partnern in Luxemburg und im Ausland zusammenarbeiten.',
      workLabel: 'Projekte und Aktivitäten', workTitle: 'Unsere Ziele in der Praxis.', workIntro: 'Einige Einblicke in unsere Aktivitäten, geteilt auf der Instagram-Seite des Vereins.',
      workPrintingCategory: 'Bildung und digitale Kreativität', workPrintingTitle: '3D-Druck entdecken', workPrintingBody: 'Ein 3D-Druck-Workshop mit jungen Menschen: lernen, gestalten und Ideen Wirklichkeit werden lassen.',
      workPrintingAlt: 'Junge Menschen nehmen an einem Workshop mit einem 3D-Drucker und einer Präsentation teil.', workPrintingLink: 'Den 3D-Druck-Workshop auf Instagram ansehen',
      workLanguageCategory: 'Sprachen und Begegnung', workLanguageTitle: 'Unser Sprachcafé startet', workLanguageBody: 'Ein erster Einblick in unser Sprachcafé, das Menschen für Gespräche und Begegnungen zusammenbringt.',
      workLanguageAlt: 'Eine Sprecherin stellt IJBLux den Teilnehmenden am Tisch des Sprachcafés vor.', workLanguageLink: 'Das Sprachcafé auf Instagram ansehen',
      workCreativeCategory: 'Kultur und Gemeinschaft', workCreativeTitle: 'Lokale Aktionen in Bewegung', workCreativeBody: 'Kunst, Musik, Tanz und Gemeinschaft: ein Einblick in unsere lokalen kreativen Aktivitäten.',
      workCreativeAlt: 'Vier Teilnehmende vor einer bunten Wand und einem IJBLux-Schild, einer mit einer Ukulele.', workCreativeLink: 'Lokale kreative Aktivitäten auf Instagram ansehen',
      workPostLink: 'Originalbeitrag ansehen', workFollowIntro: 'Verfolgen Sie unsere nächsten Schritte.', instagramLink: 'IJBLux auf Instagram besuchen', instagramOfficial: 'Unser offizielles Instagram-Profil',
      boardLabel: 'Unser Vorstand', boardTitle: 'Die Menschen hinter unserem Ziel.', boardIntro: 'Unser Gründungsvorstand, bestellt am 15. August 2026.',
      president: 'Präsident', vicePresident: 'Vizepräsident', deputyPresident: 'Stellvertretender Präsident',
      contactLabel: 'Kontakt', contactTitle: 'Gute Dinge beginnen mit einem Gespräch.',
      contactIntro: 'Sie interessieren sich für unsere Ziele, eine Mitgliedschaft oder eine mögliche Zusammenarbeit? Wir freuen uns, von Ihnen zu hören.',
      emailHint: 'Dem Verein schreiben', registeredOffice: 'Vereinssitz', registration: 'Eintragung', founded: 'Gründung', foundationDate: '15. August 2026',
      backTop: 'Nach oben', legalTitle: 'Vereinsangaben', legalDates: 'Gegründet am 15. August 2026. Eingetragen am 3. September 2026.', legalRepresentative: 'Vertreten durch den Präsidenten Vidit Goyal.',
      privacyTitle: 'Datenschutz',
      privacyBody: 'Diese Website verwendet keine Analysewerkzeuge, Werbe-Cookies, eingebetteten Drittanbieterdienste oder Kontaktformulare. Die Sprachwahl gilt nur für die aktuelle Seite und wird nicht gespeichert.',
      privacyHost: 'Bei einer Veröffentlichung über GitHub Pages verarbeitet der Hostinganbieter technische Anfragedaten nach seiner eigenen Datenschutzerklärung. Bei Fragen zu per E-Mail übermittelten Informationen wenden Sie sich an ijblasbl@gmail.com.',
      privacyLink: 'Datenschutzerklärung von GitHub ↗', footerNote: 'Jugend. Bildung. Begegnung.', announcement: 'Die Sprache der Website ist jetzt Deutsch.',
      pageTitle: 'IJBLux | Jugend, Bildung und Begegnung in Luxemburg',
      pageDescription: 'Internationaler Jugend- und Bildungsverein Luxembourg a.s.b.l. Ein luxemburgischer Verein für Jugendentwicklung, Bildung, Inklusion und internationale Zusammenarbeit. RCS F15901.',
      socialDescription: 'Ein neuer luxemburgischer Verein, der Menschen durch Bildung, interkulturelles Verständnis und Teilhabe verbindet.'
    }
  };
  const textElements = [...document.querySelectorAll('[data-i18n]')];
  const ariaElements = [...document.querySelectorAll('[data-i18n-aria]')];
  const altElements = [...document.querySelectorAll('[data-i18n-alt]')];
  // English comes from the HTML so the page is readable without JavaScript.
  translations.en = Object.fromEntries([
    ...textElements.map(element => [element.dataset.i18n, element.textContent]),
    ...ariaElements.map(element => [element.dataset.i18nAria, element.getAttribute('aria-label')]),
    ...altElements.map(element => [element.dataset.i18nAlt, element.alt]),
    ['closeMenu', 'Close navigation'], ['announcement', 'The website language is now English.'],
    ['pageTitle', document.title],
    ['pageDescription', document.querySelector('meta[name="description"]').content],
    ['socialDescription', document.querySelector('meta[property="og:description"]').content]
  ]);
  let language = 'en';
  const navigation = document.getElementById('main-nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const languageButtons = [...document.querySelectorAll('[data-language]')];
  function setMenu(open) {
    navigation.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', translations[language][open ? 'closeMenu' : 'openMenu']);
  }
  function setLanguage(nextLanguage) {
    if (!Object.hasOwn(translations, nextLanguage)) return;
    language = nextLanguage;
    const copy = translations[language];
    document.documentElement.lang = language;
    textElements.forEach(element => { element.textContent = copy[element.dataset.i18n]; });
    ariaElements.forEach(element => { element.setAttribute('aria-label', copy[element.dataset.i18nAria]); });
    altElements.forEach(element => { element.alt = copy[element.dataset.i18nAlt]; });
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    document.title = copy.pageTitle;
    document.querySelector('meta[name="description"]').content = copy.pageDescription;
    document.querySelector('meta[property="og:title"]').content = copy.pageTitle;
    document.querySelector('meta[property="og:description"]').content = copy.socialDescription;
    setMenu(menuToggle.getAttribute('aria-expanded') === 'true');
    document.getElementById('language-announcement').textContent = copy.announcement;
  }
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuToggle.focus();
    }
  });
  window.matchMedia('(max-width: 960px)').addEventListener('change', () => setMenu(false));
  document.getElementById('year').textContent = String(new Date().getFullYear());
  document.querySelector('.language-switch').hidden = false;
  menuToggle.hidden = false;
  document.documentElement.classList.add('js');
})();
