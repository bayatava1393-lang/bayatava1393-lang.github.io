AVA ENGLISH VERSION
===================
Put this entire folder inside your Persian website as a folder named: en

Example:
index.html
about.html
settings.html
en/
  index.html
  about.html
  programming.html
  ...

In the Persian website, the English button should point to:
en/index.html

Inside the English version, the Persian button already points back to:
../index.html

The English Google searches are written in English / Romanized form so Persian and English searches do not mix.
Dark mode and text settings use the same localStorage key (avaSettings), so they can be shared with the Persian version on the same domain.
