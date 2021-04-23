export default function validateInfo(values) {
  let errors = {};

  if (!values.amount.trim()) {
    errors.amount = 'amount required';
  }
  else if (!/^[0-9]+/.test(values.amount.trim())) {
    errors.amount = 'Enter a valid amount';
  }

  return errors;
}
