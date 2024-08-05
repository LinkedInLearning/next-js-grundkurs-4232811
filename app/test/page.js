import * as myFooClasses from './foo.module.css';
import * as myScssClasses from './special.module.scss';
import * as myClasses from './test.module.css';

export default function TestPage() {
  return (
    <main className={myClasses.test}>
      Ich bin die test page.js

      <div className={myFooClasses.test}>
        Ich müsste Fettschrift sein
      </div>

      <div className={myScssClasses.special}>
        Ich sollte 20px font-size haben
      </div>
    </main>
  );
}
