module.exports = {
	/**
	 * Converts kebab-case to PascalCase.
	 */
	kebabToPascal: (string) => {
		return capitalizeFirstLetter(string.replace(/-([a-z])/g, match => match[1].toUpperCase())
		)
			;
		/**
		 * Does what it says on the tin.
		 */
		function capitalizeFirstLetter(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	}
};
