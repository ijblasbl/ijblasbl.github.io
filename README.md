# IJBLux — Luxembourg association website

A small static website for **Internationaler Jugend- und Bildungsverein Luxembourg a.s.b.l.** The registered name, mission, board, registered office, email and dates come from the two supplied Luxembourg registration documents (RCS F15901). “IJBLux” is a short display name; the full registered name appears on the site.

The website is plain HTML, CSS and JavaScript. No installation, build, PHP, database, API keys or paid service is needed. It works on GitHub Pages at a repository URL or a custom domain. English is available without JavaScript; the language switch adds French and German. All fonts and graphics are local.

## Upload to GitHub Pages

1. Extract `ijblux-github-pages.zip` from the `output` folder.
2. Create a new GitHub repository, or use the repository in which you want to publish this association website. A public repository works with GitHub Free.
3. Upload the **contents** of the extracted folder. `index.html` must be directly at the repository root, alongside `styles.css`, `script.js`, `README.md`, `.nojekyll` and the `assets` folder. Do not upload the ZIP itself or nest everything inside another folder.
4. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose your publishing branch (usually `main`) and **/(root)**, then click **Save**.
6. GitHub will show your website address in the Pages settings after deployment finishes.

No GitHub Actions configuration is needed. The empty `.nojekyll` file tells GitHub to serve the static files directly. If your file picker hides dotfiles, enable hidden files to include it.

Official instructions: [Create a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [Configure the publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Preview and edit

Open `index.html` in your browser. For a local server, run this command in the website folder:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8080`.

- `index.html`: association information and English text.
- `styles.css`: colours, spacing, typography and responsive layout.
- `script.js`: French/German translations and the mobile menu.
- `assets/language-cafe.jpg`: the banner photo and language café activity photo.
- `assets/favicon.png`: browser icon derived from the official association logo.
- `assets/*.jpg`: the association’s logo and three activity photos from its Instagram page.
- `assets/SOURCES.md`: the original source links for those images.

When changing English text or adding sections, update both translation dictionaries in `script.js`. Keep all local asset links relative (`./assets/...`) so repository-based Pages URLs continue to work. The contact email is **ijblasbl@gmail.com**, as specified by the association owner. The official Instagram account is [@ijblux.asbl](https://www.instagram.com/ijblux.asbl/), explicitly shown in the contact section. The official logo from this account appears in the header, footer and browser icon.

## Content choices

The website introduces a new association, describes its areas of work, and includes three verified activities from [@ijblux.asbl](https://www.instagram.com/ijblux.asbl/): a 3D printing workshop, a language café and local creative activities. Photos and short descriptions were reused with the account owner’s permission. Each activity links to its original post. The photo files are local and work independently of Instagram. This is a curated static selection; it does not update automatically when new posts are published.

The website does not invent participant numbers, awards, funding, testimonials or partnerships. Personal identification numbers, birth details, private residential addresses and the original PDFs are not included. The board names and roles, registered association office and business contact email are included.

The previous German association pages, project archive, blog, reimbursement tools, admin panels, document-signing tools, Google Drive integrations, Secret Friend game, WhatsApp widget, server code and framework dependencies have been removed. An archive of the original application was saved locally before the replacement. Existing private local state is excluded from the upload ZIP and ignored by Git.

Only the files listed above, this README and `.nojekyll` belong in the publishing folder. The ZIP contains exactly those files. There is no existing-domain `CNAME`, analytics, cookie storage, web form or external font/image request. The footer includes the association's registration information and a brief description of site privacy.
