const COUNTER_ID = 102563691;

export const analyticFn = (form) => {
let target;

console.log(form.id)

switch (form.id) {
    case 'form-demo':
     target = 'submit_demo';
     break;

    case 'form-comparison':
     target = 'submit_comparison';
     break;

    case 'form-alternative':
     target = 'submit_alternative';
     break;

    case 'form-architectural-scheme':
     target = 'submit_architectural-scheme';
     break;

    case 'form-audit':
     target = 'submit_audit';
     break;

    case 'form-case':
     target = 'submit_case';
     break;

    default:
     return;
}

if(!target) return;
  ym(COUNTER_ID,'reachGoal', target);
  ym(COUNTER_ID,'reachGoal', 'submit__form-all');
  console.log(target)
};
