export default {
	household_dataCopyschema__root_schema__childrendisabilitychildrenstatusonSelectionChange() {
		household_dataCopy.formData.disability.status = (household_dataCopy.formData.disability.status == "true") ? true : false;
		household_dataCopy.formData.disability.ssiapplied = (household_dataCopy.formData.disability.ssiapplied == "true") ? true : false;
		household_dataCopy.formData.disability.ssiaward = (household_dataCopy.formData.disability.ssiaward == "true") ? true : false;
		household_dataCopy.formData.employment.status = (household_dataCopy.formData.employment.status == "true") ? true : false;
	}
}
