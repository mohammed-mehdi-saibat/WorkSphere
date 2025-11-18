# 🧩 WorkSphere

**Application web de gestion visuelle et interactive du personnel**

---

## 🌐 Aperçu du projet

WorkSphere est une application permettant d’organiser, visualiser et gérer les employés sur un **plan d’étage interactif**, avec des règles d’accès basées sur les rôles et une interface moderne, fluide et responsive.

---

## 🎯 Objectifs

- 🏷️ Ajouter, déplacer et supprimer des employés depuis une interface graphique
- 🧭 Respecter automatiquement les règles d’accès par rôle
- 📱 Proposer une expérience intuitive, moderne et responsive
- 🗂️ Centraliser toutes les informations du personnel sur un même outil

---

## 🧱 Fonctionnalités principales

### 👥 Gestion des employés

- Formulaire "Ajouter un employé" avec :
  - Nom
  - Rôle
  - Photo (URL) + prévisualisation
  - Email
  - Téléphone
  - Expériences professionnelles (ajout dynamique)
- Liste : **“Unassigned Staff”**
- Bouton ❌ pour retirer un employé d’une zone
- Profil complet au clic (photo grand format + infos)

---

## 🗺️ Plan d’étage interactif

Le bâtiment comporte **6 zones** :

| Zone                   | Rôle autorisé          |
| ---------------------- | ---------------------- |
| 🏛️ Salle de conférence | Tous                   |
| 🛎️ Réception           | Réceptionnistes        |
| 🖥️ Salle des serveurs  | Techniciens IT         |
| 🔐 Salle de sécurité   | Agents de sécurité     |
| 🧑‍🤝‍🧑 Salle du personnel  | Tous                   |
| 📚 Salle d’archives    | Interdite au nettoyage |

Chaque zone inclut :

- un bouton ➕ pour ajouter un employé éligible
- des alertes visuelles (zones obligatoires vides → rouge pâle)
- une limite définie d’employés

---

## 🧭 Règles d'accès par rôle

- **Manager** → accès total
- **Réceptionniste** → uniquement Réception
- **Technicien IT** → uniquement Salle des serveurs
- **Agent de sécurité** → uniquement Salle de sécurité
- **Nettoyage** → partout sauf Archives
- **Autres rôles** → accès libre sauf zones restreintes

---

## 📱 Responsive Design

Conçu avec **Flexbox + CSS Grid**, animations fluides et UI moderne.  
Formats pris en charge :

- 🖥️ Desktop large (+1280px)
- 💻 Desktop moyen (1024–1279px)
- 📲 Tablette (768–1023px)
- 📱 Mobile (≤767px)
- 📳 Mode paysage tablette/mobile

---

## ⭐ Bonus (optionnels)

- 🔄 Drag & Drop entre zones
- ✏️ Édition d’un employé
- 🔍 Recherche / filtrage par nom ou rôle
- 💾 Sauvegarde automatique via `localStorage`
- ♻️ Mode “Réorganisation automatique”

---

## 🛠️ Technologies utilisées

- **HTML5**
- **CSS3** (Flexbox, Grid, animations)
- **JavaScript Vanilla**
- **LocalStorage**
- **Git / GitHub**
- Hébergement : **GitHub Pages / Vercel**

---

## 🚀 Installation & Exécution

1. **Cloner le projet**

```bash
git clone https://github.com/mohammed-mehdi-saibat/WorkSphere.git
```

📅 Planification du projet

Organisation du travail via Trello / Jira / GitHub Projects
Lien de planification : (à compléter) <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

🌍 Déploiement

🔗 Lien du site hébergé : [https://mohammed-mehdi-saibat.github.io/WorkSphere/]
🔗 Lien du repository : [https://github.com/mohammed-mehdi-saibat/WorkSphere]

🧪 Critères de performance

✔️ Structure Git propre
✔️ Site 100% responsive
✔️ Compatibilité multi-navigateurs
✔️ Respect complet du cahier des charges
✔️ Code clair et logique
✔️ HTML / CSS validé W3C
✔️ Accessibilité & performance
✔️ Présentation finale fluide et structurée

👨‍💻 Auteur

Développé par Mohammed Mehdi Saibat (saibat01)
Projet réalisé dans un délai de 5 jours.
