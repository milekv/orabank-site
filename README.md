<p align="center">
  <img src="public/orabank-logo.png" width="780" alt="OraBank Logo">
</p>

<h3 align="center">🏦 Oracle Banking System</h3>


<p align="center">
  <a href="https://milekv.github.io/orabank-site/">
    🌐 Demo projektu
  </a>
  •
  <a href="https://github.com/milekv/oracle-bank-system">
    📦 Repozytorium
  </a>
</p>

---

## 🚀 O projekcie

**Oracle Banking System (OraBank)** to kompleksowy projekt symulujący architekturę nowoczesnego systemu bankowego.

Projekt został stworzony w celu praktycznego odwzorowania rozwiązań stosowanych w sektorze finansowym z wykorzystaniem technologii Oracle Database.

Obejmuje zagadnienia związane z:

* modelowaniem danych,
* projektowaniem relacyjnych baz danych,
* programowaniem SQL i PL/SQL,
* bezpieczeństwem danych,
* partycjonowaniem dużych zbiorów,
* automatyzacją procesów,
* optymalizacją wydajności,
* backupem i odtwarzaniem danych.

---

## 🏛️ Architektura systemu

Projekt podzielony jest na cztery główne obszary:

| Schemat    | Opis                                   |
| ---------- | -------------------------------------- |
| BANK_CORE  | Klienci, konta, karty, dane podstawowe |
| BANK_TX    | Operacje i transakcje bankowe          |
| BANK_ADMIN | Audyt, bezpieczeństwo, administracja   |
| BANK_REP   | Raportowanie i analityka               |

---

## ⚙️ Technologie

* Oracle Database 19c / 21c
* SQL
* PL/SQL
* Oracle Scheduler
* Oracle Partitioning
* Oracle Security
* RMAN Backup & Recovery
* Query Optimization
* Indexing

---

## 📂 Struktura projektu

```text
oracle-bank-system
│
├── 01_architektura
├── 02_model_erd
├── 03_tabele
├── 04_indeksy
├── 05_partycjonowanie
├── 06_plsql
├── 07_triggery
├── 08_bezpieczenstwo
├── 09_joby
├── 10_wydajnosc
├── 11_backup
```

---

## 📊 Diagram ERD

### Model główny

![ERD](./02_model_erd/erd_main.png)

### Model transakcyjny

![ERD](./02_model_erd/erd_transactions.png)

---

## 🔐 Zakres funkcjonalny

### 👤 Klienci

* dane klientów
* historia klientów
* relacje z rachunkami

### 💳 Rachunki i karty

* konta bankowe
* salda
* karty płatnicze

### 💸 Operacje

* przelewy
* transakcje
* historia operacji

### 💰 Kredyty

* harmonogramy spłat
* naliczanie odsetek
* obsługa rat

### 🛡️ Bezpieczeństwo

* role i uprawnienia
* widoki bezpieczeństwa
* audyt działań

### ⚡ Wydajność

* indeksowanie
* analiza zapytań
* partycjonowanie

### 📦 Backup

* eksport danych
* odtwarzanie
* scenariusze recovery

---

## 📈 Etapy realizacji

* [x] Architektura
* [x] Model ERD
* [x] Tabele
* [x] Indeksy
* [x] Partycjonowanie
* [x] PL/SQL
* [x] Triggery
* [x] Bezpieczeństwo
* [x] Scheduler Jobs
* [x] Optymalizacja wydajności
* [x] Backup & Recovery

---

## 👨‍💻 Autor

**Miłosz Kordziński**

SQL Developer • Database Engineer • Oracle Enthusiast

GitHub: https://github.com/milekv
