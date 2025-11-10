const COUNTER_ID = 102563691;

export const analyticFn = (form) => {
  let target;

  switch (form.id) {
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

    case 'form-expert':
      target = 'submit_expert';
      break;

    default:
      return;
  }

  if (!target) return;
  ym(COUNTER_ID, 'reachGoal', target);
  ym(COUNTER_ID, 'reachGoal', 'submit__form-all');
};
