/* Copyright (C) 2019 Monomax Software Pty Ltd
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

package presenters

import (
	"time"

	"github.com/dnote/dnote/pkg/server/database"
)

// DigestReceipt is a presented receipt
type DigestReceipt struct {
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

// PresentDigestReceipt presents a receipt
func PresentDigestReceipt(receipt database.DigestReceipt) DigestReceipt {
	ret := DigestReceipt{
		CreatedAt: receipt.CreatedAt,
		UpdatedAt: receipt.UpdatedAt,
	}

	return ret
}

// PresentDigestReceipts presents receipts
func PresentDigestReceipts(receipts []database.DigestReceipt) []DigestReceipt {
	ret := []DigestReceipt{}

	for _, receipt := range receipts {
		r := PresentDigestReceipt(receipt)
		ret = append(ret, r)
	}

	return ret
}
