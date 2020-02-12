import React, { ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';

interface Props {
  handleSelectSort: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default (props: Props) => {
  const { handleSelectSort } = props;
  return (
    <Form>
      <Form.Control as="select" onChange={handleSelectSort}>
        <option value="championPoints">Mastery points</option>
        <option value="championLevel">Mastery level</option>
        <option value="name">Name</option>
      </Form.Control>
    </Form>
  );
};
