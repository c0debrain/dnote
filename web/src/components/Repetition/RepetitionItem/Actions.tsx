/* Copyright (C) 2019, 2020 Monomax Software Pty Ltd
 *
 * This file is part of Dnote.
 *
 * Dnote is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Dnote is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Dnote.  If not, see <https://www.gnu.org/licenses/>.
 */

import classnames from 'classnames';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEditRepetitionPath } from '../../../libs/paths';
import ItemActions from '../../Common/ItemActions';
import ItemActionsStyles from '../../Common/ItemActions/ItemActions.scss';

interface Props {
  isActive: boolean;
  onDelete: () => void;
  repetitionUUID: string;
  disabled?: boolean;
}

const Actions: React.FunctionComponent<Props> = ({
  isActive,
  onDelete,
  repetitionUUID,
  disabled
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const optRefs = [useRef(null), useRef(null)];
  const options = [
    {
      name: 'edit',
      value: (
        <Link
          ref={optRefs[0]}
          type="button"
          className={classnames(
            'button-no-ui button-stretch T-edit-repetition-rule-btn',
            ItemActionsStyles.action
          )}
          to={getEditRepetitionPath(repetitionUUID)}
        >
          Edit
        </Link>
      )
    },
    {
      name: 'remove',
      value: (
        <button
          ref={optRefs[1]}
          type="button"
          className={classnames(
            'button-no-ui button-stretch T-delete-repetition-rule-btn',
            ItemActionsStyles.action
          )}
          onClick={() => {
            onDelete();
            setIsOpen(false);
          }}
        >
          Remove&hellip;
        </button>
      )
    }
  ];

  return (
    <ItemActions
      id={`repetition-rule-${repetitionUUID}-actions`}
      triggerId={`repetition-rule-actions-trigger-${repetitionUUID}`}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isActive={isActive}
      options={options}
      disabled={disabled}
      optRefs={optRefs}
    />
  );
};

export default Actions;
