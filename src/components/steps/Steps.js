import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import s from '../../styles/step.style';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import Step9 from './Step9';
import Step10 from './Step10';
import Step11 from './Step11';
import Step12 from './Step12';
import Step13 from './Step13';

export const StepMap = {
  1: {
    'step': Step1,
    'title': 'Required Tools'
  },
  2: {
    'step': Step2,
    'title': 'HTML Overview'
  },
  3: {
    'step': Step3,
    'title': 'Create Your Project Files'
  },
  4: {
    'step': Step4,
    'title': 'Adding a Title and Viewing your Site'
  },
  5: {
    'step': Step5,
    'title': 'Modifying Your Title'
  },
  6: {
    'step': Step6,
    'title': 'Adding Text to Your Site'
  },
  7: {
    'step': Step7,
    'title': 'Add a List of Variables'
  },
  8: {
    'step': Step8,
    'title': 'Ordered List of Setup Steps'
  },
  9: {
    'step': Step9,
    'title': 'Adding Bootstrap'
  },
  10: {
    'step': Step10,
    'title': 'Building a Table'
  },
  11: {
    'step': Step11,
    'title': 'Styling Your Table'
  },
  12: {
    'step': Step12,
    'title': 'Adding a Conclusion'
  },
  13: {
    'step': Step13,
    'title': 'Ordered List of Setup Steps'
  }
}

export default function Steps() {
  let stepLinks = {};

  stepLinks = Object.keys(StepMap).map(function(key) {
      let title = StepMap[key].title
      return <div style={s.pageLinkContainer} key={key}>
               <Interactive
                 as={Link}
                 to={'/steps/' + key}
               >Step {key}: {title}</Interactive>
             </div>
      });

  return (
    <Switch>
      <Route
        path={'/steps'}
        render={() => (
          <div>
            {stepLinks}
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}