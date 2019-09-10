const getRealValue_or_default = (attribute, default_value) => {
	return (typeof attribute === 'undefined' || attribute == null || attribute === null) ? default_value: attribute;
}

export default getRealValue_or_default;