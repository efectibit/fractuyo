/**
 * @module person
 */

/**
 * The Person class represents a person or entity that can be a customer or supplier.
 * It is used to store information about persons, such as their name, address and identification.
 */
class Person {
	#name
	#address
	#identification

	getName() {
		return this.#name
	}

	/**
	 * The main name.
	 * @param {string} n - Real name of person, the legal name.
	 */
	setName(n) {
		n = n?.trim()
		if (n && n.length > 0) {
			this.#name = n
		}
	}

	setIdentification(i) {
		this.#identification = i
	}

	getIdentification() {
		return this.#identification
	}

	setAddress(a) {
		this.#address = a
	}

	getAddress() {
		return this.#address
	}
}

export default Person;
