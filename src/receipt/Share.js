/**
 * Represents a payment share (cuota) for UBL 2.1 electronic invoices.
 */
class Share {
	#dueDate;
	#amount;

	/**
	 * Sets the due date for the share.
	 * @param {Date} dd - The due date.
	 */
	setDueDate(dd) {
		this.#dueDate = dd;
	}

	/**
	 * Gets the due date of the share.
	 * @returns {Date} The due date.
	 */
	getDueDate() {
		return this.#dueDate;
	}

	/**
	 * Sets and validates the amount for the share.
	 * @param {number|string} a - The share amount.
	 * @throws {Error} If the value is not a number or is less than or equal to zero.
	 */
	setAmount(a) {
		const parsed = parseFloat(a);
		if (isNaN(parsed)) {
			throw new Error("Share amount is not a valid number.");
		}
		if (parsed <= 0) {
			throw new Error("Share amount cannot be 0 or less.");
		}
		this.#amount = parsed;
	}

	/**
	 * Gets the amount of the share.
	 * @param {boolean} [withFormat=false] - If true, returns the value formatted to 2 decimal places.
	 * @returns {number|string} The share amount.
	 */
	getAmount(withFormat = false) {
		return withFormat ? this.#amount.toFixed(2) : this.#amount;
	}
}

export default Share;
