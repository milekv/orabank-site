import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  FileCheck2,
  KeyRound,
  LockKeyhole,
  RefreshCcw,
  ShieldCheck,
  TimerReset,
} from 'lucide-react';

const repositoryUrl = 'https://github.com/milekv/oracle-bank-system';

const modules = [
  {
    icon: Database,
    title: 'Relational model',
    text: 'Clients, accounts, cards, transfers, loans, instalments, balance history and audit records with explicit constraints.',
  },
  {
    icon: RefreshCcw,
    title: 'Transaction package',
    text: 'A PL/SQL transfer procedure with validation, deterministic row locks, paired ledger entries and savepoint rollback.',
  },
  {
    icon: ShieldCheck,
    title: 'Operational controls',
    text: 'Least-privilege roles, audit triggers, Scheduler jobs, reporting views and documented recovery procedures.',
  },
];

const transferSteps = [
  'Validate the amount, account state and currency.',
  'Lock both account rows in a deterministic order.',
  'Create a savepoint before any balance mutation.',
  'Write debit and credit ledger entries with one transfer record.',
  'Roll back to the savepoint and rethrow if any step fails.',
];

const controls = [
  {
    icon: KeyRound,
    title: 'Access roles',
    text: 'Separate admin, teller and auditor grants. Public scripts prompt for passwords instead of storing credentials.',
    path: '08_bezpieczenstwo/orabank_security.sql',
  },
  {
    icon: FileCheck2,
    title: 'Audit trail',
    text: 'A balance trigger records old and new values with the database user and timestamp.',
    path: '07_triggery/orabank_triggers.sql',
  },
  {
    icon: TimerReset,
    title: 'Scheduled work',
    text: 'Oracle Scheduler definitions cover balance snapshots and overdue loan maintenance.',
    path: '09_joby/orabank_jobs.sql',
  },
  {
    icon: LockKeyhole,
    title: 'Recovery planning',
    text: 'Backup, validation and restore commands are documented as an operator runbook, not presented as a deployed service.',
    path: '11_backup_recovery/orabank_backup_recovery.md',
  },
];

const code = `PROCEDURE TRANSFER_FUNDS (...) IS
BEGIN
    SAVEPOINT BEFORE_TRANSFER;

    -- Accounts are locked in a stable order.
    SELECT BALANCE, STATUS
      INTO V_BALANCE, V_STATUS
      FROM ACCOUNT
     WHERE ACCOUNT_ID = V_FIRST_ACCOUNT_ID
       FOR UPDATE;

    -- Debit and credit rows share the transfer record.
    INSERT INTO BANK_TRANSACTION (...);
    INSERT INTO BANK_TRANSACTION (...);
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK TO BEFORE_TRANSFER;
        RAISE;
END;`;

function App() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="OraBank home">
          <span className="brand-mark">O</span>
          <span>OraBank</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#system">System</a>
          <a href="#transfer">Transfer</a>
          <a href="#controls">Controls</a>
        </nav>
        <a className="header-link" href={repositoryUrl}>
          GitHub <ArrowUpRight size={15} />
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Oracle SQL and PL/SQL reference project</p>
            <h1>A banking data model built around transaction safety.</h1>
            <p className="hero-lead">
              OraBank is an educational database engineering project covering
              accounts, transfers, loans, auditing, access roles and recovery
              planning. Its SQL is designed to be read, installed and reviewed.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={repositoryUrl}>
                <Code2 size={18} /> View source
              </a>
              <a
                className="button secondary"
                href={`${repositoryUrl}/blob/main/instrukcja_uruchomienia.md`}
              >
                Installation guide <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <aside className="status-card" aria-label="Project status">
            <div className="status-heading">
              <span className="status-dot" />
              Review status
            </div>
            <dl>
              <div>
                <dt>Platform</dt>
                <dd>Oracle Database</dd>
              </div>
              <div>
                <dt>Core</dt>
                <dd>SQL and PL/SQL</dd>
              </div>
              <div>
                <dt>Validation</dt>
                <dd>Static checks and smoke SQL</dd>
              </div>
              <div>
                <dt>License</dt>
                <dd>MIT</dd>
              </div>
            </dl>
            <p>
              Reference implementation. It is not production banking software
              and no live transaction volume is claimed.
            </p>
          </aside>
        </section>

        <section className="section" id="system">
          <div className="section-heading">
            <div>
              <p className="eyebrow">System scope</p>
              <h2>What the repository actually implements</h2>
            </div>
            <p>
              The project separates the data model, transactional logic and
              operator-facing controls into reviewable SQL files.
            </p>
          </div>
          <div className="module-grid">
            {modules.map((item) => (
              <article className="module-card" key={item.title}>
                <item.icon size={22} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section transfer-section" id="transfer">
          <div className="transfer-copy">
            <p className="eyebrow">Critical path</p>
            <h2>One transfer, one transaction boundary</h2>
            <p className="section-intro">
              The transfer procedure validates first, locks consistently and
              leaves commit control with the caller.
            </p>
            <ol className="step-list">
              {transferSteps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="code-card">
            <div className="code-title">
              <span>orabank_account_pkg.sql</span>
              <a
                href={`${repositoryUrl}/blob/main/06_plsql/pakiety/orabank_account_pkg.sql`}
              >
                Open file <ArrowUpRight size={14} />
              </a>
            </div>
            <pre>
              <code>{code}</code>
            </pre>
          </div>
        </section>

        <section className="section" id="controls">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Operational evidence</p>
              <h2>Controls linked to their source</h2>
            </div>
            <p>
              Each claim below points to the exact implementation or runbook in
              the repository.
            </p>
          </div>
          <div className="control-grid">
            {controls.map((item) => (
              <article className="control-card" key={item.title}>
                <div className="control-icon">
                  <item.icon size={20} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={`${repositoryUrl}/blob/main/${item.path}`}>
                  {item.path} <ArrowUpRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="verification">
          <div>
            <p className="eyebrow">Verification</p>
            <h2>Install and inspect it from a clean schema.</h2>
          </div>
          <div className="verification-list">
            <p><CheckCircle2 size={18} /> Ordered master install script</p>
            <p><CheckCircle2 size={18} /> Static SQL structure checker</p>
            <p><CheckCircle2 size={18} /> Post-install validation queries</p>
            <p><CheckCircle2 size={18} /> Transfer smoke test</p>
          </div>
          <a className="button primary" href={repositoryUrl}>
            Review repository <ArrowUpRight size={17} />
          </a>
        </section>
      </main>

      <footer>
        <span>OraBank case study</span>
        <span>Oracle SQL - PL/SQL - MIT</span>
      </footer>
    </div>
  );
}

export default App;
