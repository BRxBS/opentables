import s from './styles.module.scss';

export default function Loading() {
    return (
      <main className={s.main}>
   
        <div className={s.header}>
          <div/>
        </div>
        <div className={s.nav}>
          <div>
            <nav >
            </nav>
  
            <div className={s.content}></div>
  
            <div className={s.content2}>
              <div>
                <div ></div>
                <p ></p>
              </div>
              <div>
                <p > </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }