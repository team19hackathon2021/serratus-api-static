
// PUTImport //

async function putimportSequenceRun($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_searchList').val();
	if(json != null && json !== '')
		putimportSequenceRunVals(JSON.parse(json), success, error);
}

function putimportSequenceRunVals(json, success, error) {
	$.ajax({
		url: '/api/run/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// POST //

async function postSequenceRun($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			addError($formValues.next('button'));
		};
	}

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived == 'true';

	var valueDeleted = $formValues.find('.valueDeleted').val();
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted == 'true';

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueRunId = $formValues.find('.valueRunId').val();
	if(valueRunId != null && valueRunId !== '')
		vals['runId'] = valueRunId;

	var valueRunReleaseDate = $formValues.find('.valueRunReleaseDate').val();
	if(valueRunReleaseDate != null && valueRunReleaseDate !== '')
		vals['runReleaseDate'] = valueRunReleaseDate;

	var valueRunLoadDate = $formValues.find('.valueRunLoadDate').val();
	if(valueRunLoadDate != null && valueRunLoadDate !== '')
		vals['runLoadDate'] = valueRunLoadDate;

	var valueProjectId = $formValues.find('.valueProjectId').val();
	if(valueProjectId != null && valueProjectId !== '')
		vals['projectId'] = valueProjectId;

	var valueBioSampleId = $formValues.find('.valueBioSampleId').val();
	if(valueBioSampleId != null && valueBioSampleId !== '')
		vals['bioSampleId'] = valueBioSampleId;

	var valueBioSampleIsolate = $formValues.find('.valueBioSampleIsolate').val();
	if(valueBioSampleIsolate != null && valueBioSampleIsolate !== '')
		vals['bioSampleIsolate'] = valueBioSampleIsolate;

	var valueBioSampleHost = $formValues.find('.valueBioSampleHost').val();
	if(valueBioSampleHost != null && valueBioSampleHost !== '')
		vals['bioSampleHost'] = valueBioSampleHost;

	var valueBioSampleLabHost = $formValues.find('.valueBioSampleLabHost').val();
	if(valueBioSampleLabHost != null && valueBioSampleLabHost !== '')
		vals['bioSampleLabHost'] = valueBioSampleLabHost;

	var valueBioSampleIsolationSource = $formValues.find('.valueBioSampleIsolationSource').val();
	if(valueBioSampleIsolationSource != null && valueBioSampleIsolationSource !== '')
		vals['bioSampleIsolationSource'] = valueBioSampleIsolationSource;

	var valueBioSampleGeographicLocation = $formValues.find('.valueBioSampleGeographicLocation').val();
	if(valueBioSampleGeographicLocation != null && valueBioSampleGeographicLocation !== '')
		vals['bioSampleGeographicLocation'] = valueBioSampleGeographicLocation;

	var valueBioSampleLatitudeLongitude = $formValues.find('.valueBioSampleLatitudeLongitude').val();
	if(valueBioSampleLatitudeLongitude != null && valueBioSampleLatitudeLongitude !== '')
		vals['bioSampleLatitudeLongitude'] = valueBioSampleLatitudeLongitude;

	var valueBioSampleReferenceForBioMaterial = $formValues.find('.valueBioSampleReferenceForBioMaterial').val();
	if(valueBioSampleReferenceForBioMaterial != null && valueBioSampleReferenceForBioMaterial !== '')
		vals['bioSampleReferenceForBioMaterial'] = valueBioSampleReferenceForBioMaterial;

	var valueBioSampleMaterialProcessing = $formValues.find('.valueBioSampleMaterialProcessing').val();
	if(valueBioSampleMaterialProcessing != null && valueBioSampleMaterialProcessing !== '')
		vals['bioSampleMaterialProcessing'] = valueBioSampleMaterialProcessing;

	var valueBioSampleMaterialIdentifiers = $formValues.find('.valueBioSampleMaterialIdentifiers').val();
	if(valueBioSampleMaterialIdentifiers != null && valueBioSampleMaterialIdentifiers !== '')
		vals['bioSampleMaterialIdentifiers'] = valueBioSampleMaterialIdentifiers;

	var valueBioSampleDisease = $formValues.find('.valueBioSampleDisease').val();
	if(valueBioSampleDisease != null && valueBioSampleDisease !== '')
		vals['bioSampleDisease'] = valueBioSampleDisease;

	var valueBioSampleHostTissueSampled = $formValues.find('.valueBioSampleHostTissueSampled').val();
	if(valueBioSampleHostTissueSampled != null && valueBioSampleHostTissueSampled !== '')
		vals['bioSampleHostTissueSampled'] = valueBioSampleHostTissueSampled;

	var valueBioSampleCollectedBy = $formValues.find('.valueBioSampleCollectedBy').val();
	if(valueBioSampleCollectedBy != null && valueBioSampleCollectedBy !== '')
		vals['bioSampleCollectedBy'] = valueBioSampleCollectedBy;

	var valueTaxonomyId = $formValues.find('.valueTaxonomyId').val();
	if(valueTaxonomyId != null && valueTaxonomyId !== '')
		vals['taxonomyId'] = valueTaxonomyId;

	var valueTaxonomyName = $formValues.find('.valueTaxonomyName').val();
	if(valueTaxonomyName != null && valueTaxonomyName !== '')
		vals['taxonomyName'] = valueTaxonomyName;

	var valueTaxonomyUniqueName = $formValues.find('.valueTaxonomyUniqueName').val();
	if(valueTaxonomyUniqueName != null && valueTaxonomyUniqueName !== '')
		vals['taxonomyUniqueName'] = valueTaxonomyUniqueName;

	var valueTaxonomyNameClass = $formValues.find('.valueTaxonomyNameClass').val();
	if(valueTaxonomyNameClass != null && valueTaxonomyNameClass !== '')
		vals['taxonomyNameClass'] = valueTaxonomyNameClass;

	$.ajax({
		url: '/api/run'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSequenceRunVals(vals, success, error) {
	$.ajax({
		url: '/api/run'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSequenceRun($formFilters, $formValues, pk, success, error) {
	var filters = patchSequenceRunFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	var removePk = $formValues.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	var addPk = $formValues.find('.addPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	var removeCreated = $formValues.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	var addCreated = $formValues.find('.addCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	var removeModified = $formValues.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	var addModified = $formValues.find('.addModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	var addObjectId = $formValues.find('.addObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	var removeArchived = $formValues.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	var setArchived = removeArchived ? null : valueArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').val();
	var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	var setDeleted = removeDeleted ? null : valueDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueUserId = $formValues.find('.valueUserId').val();
	var removeUserId = $formValues.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	var addUserId = $formValues.find('.addUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	var addUserKey = $formValues.find('.addUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	var valueRunId = $formValues.find('.valueRunId').val();
	var removeRunId = $formValues.find('.removeRunId').val() === 'true';
	var setRunId = removeRunId ? null : $formValues.find('.setRunId').val();
	var addRunId = $formValues.find('.addRunId').val();
	if(removeRunId || setRunId != null && setRunId !== '')
		vals['setRunId'] = setRunId;
	if(addRunId != null && addRunId !== '')
		vals['addRunId'] = addRunId;
	var removeRunId = $formValues.find('.removeRunId').val();
	if(removeRunId != null && removeRunId !== '')
		vals['removeRunId'] = removeRunId;

	var valueRunReleaseDate = $formValues.find('.valueRunReleaseDate').val();
	var removeRunReleaseDate = $formValues.find('.removeRunReleaseDate').val() === 'true';
	var setRunReleaseDate = removeRunReleaseDate ? null : $formValues.find('.setRunReleaseDate').val();
	var addRunReleaseDate = $formValues.find('.addRunReleaseDate').val();
	if(removeRunReleaseDate || setRunReleaseDate != null && setRunReleaseDate !== '')
		vals['setRunReleaseDate'] = setRunReleaseDate;
	if(addRunReleaseDate != null && addRunReleaseDate !== '')
		vals['addRunReleaseDate'] = addRunReleaseDate;
	var removeRunReleaseDate = $formValues.find('.removeRunReleaseDate').val();
	if(removeRunReleaseDate != null && removeRunReleaseDate !== '')
		vals['removeRunReleaseDate'] = removeRunReleaseDate;

	var valueRunLoadDate = $formValues.find('.valueRunLoadDate').val();
	var removeRunLoadDate = $formValues.find('.removeRunLoadDate').val() === 'true';
	var setRunLoadDate = removeRunLoadDate ? null : $formValues.find('.setRunLoadDate').val();
	var addRunLoadDate = $formValues.find('.addRunLoadDate').val();
	if(removeRunLoadDate || setRunLoadDate != null && setRunLoadDate !== '')
		vals['setRunLoadDate'] = setRunLoadDate;
	if(addRunLoadDate != null && addRunLoadDate !== '')
		vals['addRunLoadDate'] = addRunLoadDate;
	var removeRunLoadDate = $formValues.find('.removeRunLoadDate').val();
	if(removeRunLoadDate != null && removeRunLoadDate !== '')
		vals['removeRunLoadDate'] = removeRunLoadDate;

	var valueProjectId = $formValues.find('.valueProjectId').val();
	var removeProjectId = $formValues.find('.removeProjectId').val() === 'true';
	var setProjectId = removeProjectId ? null : $formValues.find('.setProjectId').val();
	var addProjectId = $formValues.find('.addProjectId').val();
	if(removeProjectId || setProjectId != null && setProjectId !== '')
		vals['setProjectId'] = setProjectId;
	if(addProjectId != null && addProjectId !== '')
		vals['addProjectId'] = addProjectId;
	var removeProjectId = $formValues.find('.removeProjectId').val();
	if(removeProjectId != null && removeProjectId !== '')
		vals['removeProjectId'] = removeProjectId;

	var valueBioSampleId = $formValues.find('.valueBioSampleId').val();
	var removeBioSampleId = $formValues.find('.removeBioSampleId').val() === 'true';
	var setBioSampleId = removeBioSampleId ? null : $formValues.find('.setBioSampleId').val();
	var addBioSampleId = $formValues.find('.addBioSampleId').val();
	if(removeBioSampleId || setBioSampleId != null && setBioSampleId !== '')
		vals['setBioSampleId'] = setBioSampleId;
	if(addBioSampleId != null && addBioSampleId !== '')
		vals['addBioSampleId'] = addBioSampleId;
	var removeBioSampleId = $formValues.find('.removeBioSampleId').val();
	if(removeBioSampleId != null && removeBioSampleId !== '')
		vals['removeBioSampleId'] = removeBioSampleId;

	var valueBioSampleIsolate = $formValues.find('.valueBioSampleIsolate').val();
	var removeBioSampleIsolate = $formValues.find('.removeBioSampleIsolate').val() === 'true';
	var setBioSampleIsolate = removeBioSampleIsolate ? null : $formValues.find('.setBioSampleIsolate').val();
	var addBioSampleIsolate = $formValues.find('.addBioSampleIsolate').val();
	if(removeBioSampleIsolate || setBioSampleIsolate != null && setBioSampleIsolate !== '')
		vals['setBioSampleIsolate'] = setBioSampleIsolate;
	if(addBioSampleIsolate != null && addBioSampleIsolate !== '')
		vals['addBioSampleIsolate'] = addBioSampleIsolate;
	var removeBioSampleIsolate = $formValues.find('.removeBioSampleIsolate').val();
	if(removeBioSampleIsolate != null && removeBioSampleIsolate !== '')
		vals['removeBioSampleIsolate'] = removeBioSampleIsolate;

	var valueBioSampleHost = $formValues.find('.valueBioSampleHost').val();
	var removeBioSampleHost = $formValues.find('.removeBioSampleHost').val() === 'true';
	var setBioSampleHost = removeBioSampleHost ? null : $formValues.find('.setBioSampleHost').val();
	var addBioSampleHost = $formValues.find('.addBioSampleHost').val();
	if(removeBioSampleHost || setBioSampleHost != null && setBioSampleHost !== '')
		vals['setBioSampleHost'] = setBioSampleHost;
	if(addBioSampleHost != null && addBioSampleHost !== '')
		vals['addBioSampleHost'] = addBioSampleHost;
	var removeBioSampleHost = $formValues.find('.removeBioSampleHost').val();
	if(removeBioSampleHost != null && removeBioSampleHost !== '')
		vals['removeBioSampleHost'] = removeBioSampleHost;

	var valueBioSampleLabHost = $formValues.find('.valueBioSampleLabHost').val();
	var removeBioSampleLabHost = $formValues.find('.removeBioSampleLabHost').val() === 'true';
	var setBioSampleLabHost = removeBioSampleLabHost ? null : $formValues.find('.setBioSampleLabHost').val();
	var addBioSampleLabHost = $formValues.find('.addBioSampleLabHost').val();
	if(removeBioSampleLabHost || setBioSampleLabHost != null && setBioSampleLabHost !== '')
		vals['setBioSampleLabHost'] = setBioSampleLabHost;
	if(addBioSampleLabHost != null && addBioSampleLabHost !== '')
		vals['addBioSampleLabHost'] = addBioSampleLabHost;
	var removeBioSampleLabHost = $formValues.find('.removeBioSampleLabHost').val();
	if(removeBioSampleLabHost != null && removeBioSampleLabHost !== '')
		vals['removeBioSampleLabHost'] = removeBioSampleLabHost;

	var valueBioSampleIsolationSource = $formValues.find('.valueBioSampleIsolationSource').val();
	var removeBioSampleIsolationSource = $formValues.find('.removeBioSampleIsolationSource').val() === 'true';
	var setBioSampleIsolationSource = removeBioSampleIsolationSource ? null : $formValues.find('.setBioSampleIsolationSource').val();
	var addBioSampleIsolationSource = $formValues.find('.addBioSampleIsolationSource').val();
	if(removeBioSampleIsolationSource || setBioSampleIsolationSource != null && setBioSampleIsolationSource !== '')
		vals['setBioSampleIsolationSource'] = setBioSampleIsolationSource;
	if(addBioSampleIsolationSource != null && addBioSampleIsolationSource !== '')
		vals['addBioSampleIsolationSource'] = addBioSampleIsolationSource;
	var removeBioSampleIsolationSource = $formValues.find('.removeBioSampleIsolationSource').val();
	if(removeBioSampleIsolationSource != null && removeBioSampleIsolationSource !== '')
		vals['removeBioSampleIsolationSource'] = removeBioSampleIsolationSource;

	var valueBioSampleGeographicLocation = $formValues.find('.valueBioSampleGeographicLocation').val();
	var removeBioSampleGeographicLocation = $formValues.find('.removeBioSampleGeographicLocation').val() === 'true';
	var setBioSampleGeographicLocation = removeBioSampleGeographicLocation ? null : $formValues.find('.setBioSampleGeographicLocation').val();
	var addBioSampleGeographicLocation = $formValues.find('.addBioSampleGeographicLocation').val();
	if(removeBioSampleGeographicLocation || setBioSampleGeographicLocation != null && setBioSampleGeographicLocation !== '')
		vals['setBioSampleGeographicLocation'] = setBioSampleGeographicLocation;
	if(addBioSampleGeographicLocation != null && addBioSampleGeographicLocation !== '')
		vals['addBioSampleGeographicLocation'] = addBioSampleGeographicLocation;
	var removeBioSampleGeographicLocation = $formValues.find('.removeBioSampleGeographicLocation').val();
	if(removeBioSampleGeographicLocation != null && removeBioSampleGeographicLocation !== '')
		vals['removeBioSampleGeographicLocation'] = removeBioSampleGeographicLocation;

	var valueBioSampleLatitudeLongitude = $formValues.find('.valueBioSampleLatitudeLongitude').val();
	var removeBioSampleLatitudeLongitude = $formValues.find('.removeBioSampleLatitudeLongitude').val() === 'true';
	var setBioSampleLatitudeLongitude = removeBioSampleLatitudeLongitude ? null : $formValues.find('.setBioSampleLatitudeLongitude').val();
	var addBioSampleLatitudeLongitude = $formValues.find('.addBioSampleLatitudeLongitude').val();
	if(removeBioSampleLatitudeLongitude || setBioSampleLatitudeLongitude != null && setBioSampleLatitudeLongitude !== '')
		vals['setBioSampleLatitudeLongitude'] = setBioSampleLatitudeLongitude;
	if(addBioSampleLatitudeLongitude != null && addBioSampleLatitudeLongitude !== '')
		vals['addBioSampleLatitudeLongitude'] = addBioSampleLatitudeLongitude;
	var removeBioSampleLatitudeLongitude = $formValues.find('.removeBioSampleLatitudeLongitude').val();
	if(removeBioSampleLatitudeLongitude != null && removeBioSampleLatitudeLongitude !== '')
		vals['removeBioSampleLatitudeLongitude'] = removeBioSampleLatitudeLongitude;

	var valueBioSampleReferenceForBioMaterial = $formValues.find('.valueBioSampleReferenceForBioMaterial').val();
	var removeBioSampleReferenceForBioMaterial = $formValues.find('.removeBioSampleReferenceForBioMaterial').val() === 'true';
	var setBioSampleReferenceForBioMaterial = removeBioSampleReferenceForBioMaterial ? null : $formValues.find('.setBioSampleReferenceForBioMaterial').val();
	var addBioSampleReferenceForBioMaterial = $formValues.find('.addBioSampleReferenceForBioMaterial').val();
	if(removeBioSampleReferenceForBioMaterial || setBioSampleReferenceForBioMaterial != null && setBioSampleReferenceForBioMaterial !== '')
		vals['setBioSampleReferenceForBioMaterial'] = setBioSampleReferenceForBioMaterial;
	if(addBioSampleReferenceForBioMaterial != null && addBioSampleReferenceForBioMaterial !== '')
		vals['addBioSampleReferenceForBioMaterial'] = addBioSampleReferenceForBioMaterial;
	var removeBioSampleReferenceForBioMaterial = $formValues.find('.removeBioSampleReferenceForBioMaterial').val();
	if(removeBioSampleReferenceForBioMaterial != null && removeBioSampleReferenceForBioMaterial !== '')
		vals['removeBioSampleReferenceForBioMaterial'] = removeBioSampleReferenceForBioMaterial;

	var valueBioSampleMaterialProcessing = $formValues.find('.valueBioSampleMaterialProcessing').val();
	var removeBioSampleMaterialProcessing = $formValues.find('.removeBioSampleMaterialProcessing').val() === 'true';
	var setBioSampleMaterialProcessing = removeBioSampleMaterialProcessing ? null : $formValues.find('.setBioSampleMaterialProcessing').val();
	var addBioSampleMaterialProcessing = $formValues.find('.addBioSampleMaterialProcessing').val();
	if(removeBioSampleMaterialProcessing || setBioSampleMaterialProcessing != null && setBioSampleMaterialProcessing !== '')
		vals['setBioSampleMaterialProcessing'] = setBioSampleMaterialProcessing;
	if(addBioSampleMaterialProcessing != null && addBioSampleMaterialProcessing !== '')
		vals['addBioSampleMaterialProcessing'] = addBioSampleMaterialProcessing;
	var removeBioSampleMaterialProcessing = $formValues.find('.removeBioSampleMaterialProcessing').val();
	if(removeBioSampleMaterialProcessing != null && removeBioSampleMaterialProcessing !== '')
		vals['removeBioSampleMaterialProcessing'] = removeBioSampleMaterialProcessing;

	var valueBioSampleMaterialIdentifiers = $formValues.find('.valueBioSampleMaterialIdentifiers').val();
	var removeBioSampleMaterialIdentifiers = $formValues.find('.removeBioSampleMaterialIdentifiers').val() === 'true';
	var setBioSampleMaterialIdentifiers = removeBioSampleMaterialIdentifiers ? null : $formValues.find('.setBioSampleMaterialIdentifiers').val();
	var addBioSampleMaterialIdentifiers = $formValues.find('.addBioSampleMaterialIdentifiers').val();
	if(removeBioSampleMaterialIdentifiers || setBioSampleMaterialIdentifiers != null && setBioSampleMaterialIdentifiers !== '')
		vals['setBioSampleMaterialIdentifiers'] = setBioSampleMaterialIdentifiers;
	if(addBioSampleMaterialIdentifiers != null && addBioSampleMaterialIdentifiers !== '')
		vals['addBioSampleMaterialIdentifiers'] = addBioSampleMaterialIdentifiers;
	var removeBioSampleMaterialIdentifiers = $formValues.find('.removeBioSampleMaterialIdentifiers').val();
	if(removeBioSampleMaterialIdentifiers != null && removeBioSampleMaterialIdentifiers !== '')
		vals['removeBioSampleMaterialIdentifiers'] = removeBioSampleMaterialIdentifiers;

	var valueBioSampleDisease = $formValues.find('.valueBioSampleDisease').val();
	var removeBioSampleDisease = $formValues.find('.removeBioSampleDisease').val() === 'true';
	var setBioSampleDisease = removeBioSampleDisease ? null : $formValues.find('.setBioSampleDisease').val();
	var addBioSampleDisease = $formValues.find('.addBioSampleDisease').val();
	if(removeBioSampleDisease || setBioSampleDisease != null && setBioSampleDisease !== '')
		vals['setBioSampleDisease'] = setBioSampleDisease;
	if(addBioSampleDisease != null && addBioSampleDisease !== '')
		vals['addBioSampleDisease'] = addBioSampleDisease;
	var removeBioSampleDisease = $formValues.find('.removeBioSampleDisease').val();
	if(removeBioSampleDisease != null && removeBioSampleDisease !== '')
		vals['removeBioSampleDisease'] = removeBioSampleDisease;

	var valueBioSampleHostTissueSampled = $formValues.find('.valueBioSampleHostTissueSampled').val();
	var removeBioSampleHostTissueSampled = $formValues.find('.removeBioSampleHostTissueSampled').val() === 'true';
	var setBioSampleHostTissueSampled = removeBioSampleHostTissueSampled ? null : $formValues.find('.setBioSampleHostTissueSampled').val();
	var addBioSampleHostTissueSampled = $formValues.find('.addBioSampleHostTissueSampled').val();
	if(removeBioSampleHostTissueSampled || setBioSampleHostTissueSampled != null && setBioSampleHostTissueSampled !== '')
		vals['setBioSampleHostTissueSampled'] = setBioSampleHostTissueSampled;
	if(addBioSampleHostTissueSampled != null && addBioSampleHostTissueSampled !== '')
		vals['addBioSampleHostTissueSampled'] = addBioSampleHostTissueSampled;
	var removeBioSampleHostTissueSampled = $formValues.find('.removeBioSampleHostTissueSampled').val();
	if(removeBioSampleHostTissueSampled != null && removeBioSampleHostTissueSampled !== '')
		vals['removeBioSampleHostTissueSampled'] = removeBioSampleHostTissueSampled;

	var valueBioSampleCollectedBy = $formValues.find('.valueBioSampleCollectedBy').val();
	var removeBioSampleCollectedBy = $formValues.find('.removeBioSampleCollectedBy').val() === 'true';
	var setBioSampleCollectedBy = removeBioSampleCollectedBy ? null : $formValues.find('.setBioSampleCollectedBy').val();
	var addBioSampleCollectedBy = $formValues.find('.addBioSampleCollectedBy').val();
	if(removeBioSampleCollectedBy || setBioSampleCollectedBy != null && setBioSampleCollectedBy !== '')
		vals['setBioSampleCollectedBy'] = setBioSampleCollectedBy;
	if(addBioSampleCollectedBy != null && addBioSampleCollectedBy !== '')
		vals['addBioSampleCollectedBy'] = addBioSampleCollectedBy;
	var removeBioSampleCollectedBy = $formValues.find('.removeBioSampleCollectedBy').val();
	if(removeBioSampleCollectedBy != null && removeBioSampleCollectedBy !== '')
		vals['removeBioSampleCollectedBy'] = removeBioSampleCollectedBy;

	var valueTaxonomyId = $formValues.find('.valueTaxonomyId').val();
	var removeTaxonomyId = $formValues.find('.removeTaxonomyId').val() === 'true';
	var setTaxonomyId = removeTaxonomyId ? null : $formValues.find('.setTaxonomyId').val();
	var addTaxonomyId = $formValues.find('.addTaxonomyId').val();
	if(removeTaxonomyId || setTaxonomyId != null && setTaxonomyId !== '')
		vals['setTaxonomyId'] = setTaxonomyId;
	if(addTaxonomyId != null && addTaxonomyId !== '')
		vals['addTaxonomyId'] = addTaxonomyId;
	var removeTaxonomyId = $formValues.find('.removeTaxonomyId').val();
	if(removeTaxonomyId != null && removeTaxonomyId !== '')
		vals['removeTaxonomyId'] = removeTaxonomyId;

	var valueTaxonomyName = $formValues.find('.valueTaxonomyName').val();
	var removeTaxonomyName = $formValues.find('.removeTaxonomyName').val() === 'true';
	var setTaxonomyName = removeTaxonomyName ? null : $formValues.find('.setTaxonomyName').val();
	var addTaxonomyName = $formValues.find('.addTaxonomyName').val();
	if(removeTaxonomyName || setTaxonomyName != null && setTaxonomyName !== '')
		vals['setTaxonomyName'] = setTaxonomyName;
	if(addTaxonomyName != null && addTaxonomyName !== '')
		vals['addTaxonomyName'] = addTaxonomyName;
	var removeTaxonomyName = $formValues.find('.removeTaxonomyName').val();
	if(removeTaxonomyName != null && removeTaxonomyName !== '')
		vals['removeTaxonomyName'] = removeTaxonomyName;

	var valueTaxonomyUniqueName = $formValues.find('.valueTaxonomyUniqueName').val();
	var removeTaxonomyUniqueName = $formValues.find('.removeTaxonomyUniqueName').val() === 'true';
	var setTaxonomyUniqueName = removeTaxonomyUniqueName ? null : $formValues.find('.setTaxonomyUniqueName').val();
	var addTaxonomyUniqueName = $formValues.find('.addTaxonomyUniqueName').val();
	if(removeTaxonomyUniqueName || setTaxonomyUniqueName != null && setTaxonomyUniqueName !== '')
		vals['setTaxonomyUniqueName'] = setTaxonomyUniqueName;
	if(addTaxonomyUniqueName != null && addTaxonomyUniqueName !== '')
		vals['addTaxonomyUniqueName'] = addTaxonomyUniqueName;
	var removeTaxonomyUniqueName = $formValues.find('.removeTaxonomyUniqueName').val();
	if(removeTaxonomyUniqueName != null && removeTaxonomyUniqueName !== '')
		vals['removeTaxonomyUniqueName'] = removeTaxonomyUniqueName;

	var valueTaxonomyNameClass = $formValues.find('.valueTaxonomyNameClass').val();
	var removeTaxonomyNameClass = $formValues.find('.removeTaxonomyNameClass').val() === 'true';
	var setTaxonomyNameClass = removeTaxonomyNameClass ? null : $formValues.find('.setTaxonomyNameClass').val();
	var addTaxonomyNameClass = $formValues.find('.addTaxonomyNameClass').val();
	if(removeTaxonomyNameClass || setTaxonomyNameClass != null && setTaxonomyNameClass !== '')
		vals['setTaxonomyNameClass'] = setTaxonomyNameClass;
	if(addTaxonomyNameClass != null && addTaxonomyNameClass !== '')
		vals['addTaxonomyNameClass'] = addTaxonomyNameClass;
	var removeTaxonomyNameClass = $formValues.find('.removeTaxonomyNameClass').val();
	if(removeTaxonomyNameClass != null && removeTaxonomyNameClass !== '')
		vals['removeTaxonomyNameClass'] = removeTaxonomyNameClass;

	patchSequenceRunVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSequenceRunFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterRunId = $formFilters.find('.valueRunId').val();
		if(filterRunId != null && filterRunId !== '')
			filters.push({ name: 'fq', value: 'runId:' + filterRunId });

		var filterRunReleaseDate = $formFilters.find('.valueRunReleaseDate').val();
		if(filterRunReleaseDate != null && filterRunReleaseDate !== '')
			filters.push({ name: 'fq', value: 'runReleaseDate:' + filterRunReleaseDate });

		var filterRunLoadDate = $formFilters.find('.valueRunLoadDate').val();
		if(filterRunLoadDate != null && filterRunLoadDate !== '')
			filters.push({ name: 'fq', value: 'runLoadDate:' + filterRunLoadDate });

		var filterProjectId = $formFilters.find('.valueProjectId').val();
		if(filterProjectId != null && filterProjectId !== '')
			filters.push({ name: 'fq', value: 'projectId:' + filterProjectId });

		var filterBioSampleId = $formFilters.find('.valueBioSampleId').val();
		if(filterBioSampleId != null && filterBioSampleId !== '')
			filters.push({ name: 'fq', value: 'bioSampleId:' + filterBioSampleId });

		var filterBioSampleIsolate = $formFilters.find('.valueBioSampleIsolate').val();
		if(filterBioSampleIsolate != null && filterBioSampleIsolate !== '')
			filters.push({ name: 'fq', value: 'bioSampleIsolate:' + filterBioSampleIsolate });

		var filterBioSampleHost = $formFilters.find('.valueBioSampleHost').val();
		if(filterBioSampleHost != null && filterBioSampleHost !== '')
			filters.push({ name: 'fq', value: 'bioSampleHost:' + filterBioSampleHost });

		var filterBioSampleLabHost = $formFilters.find('.valueBioSampleLabHost').val();
		if(filterBioSampleLabHost != null && filterBioSampleLabHost !== '')
			filters.push({ name: 'fq', value: 'bioSampleLabHost:' + filterBioSampleLabHost });

		var filterBioSampleIsolationSource = $formFilters.find('.valueBioSampleIsolationSource').val();
		if(filterBioSampleIsolationSource != null && filterBioSampleIsolationSource !== '')
			filters.push({ name: 'fq', value: 'bioSampleIsolationSource:' + filterBioSampleIsolationSource });

		var filterBioSampleGeographicLocation = $formFilters.find('.valueBioSampleGeographicLocation').val();
		if(filterBioSampleGeographicLocation != null && filterBioSampleGeographicLocation !== '')
			filters.push({ name: 'fq', value: 'bioSampleGeographicLocation:' + filterBioSampleGeographicLocation });

		var filterBioSampleLatitudeLongitude = $formFilters.find('.valueBioSampleLatitudeLongitude').val();
		if(filterBioSampleLatitudeLongitude != null && filterBioSampleLatitudeLongitude !== '')
			filters.push({ name: 'fq', value: 'bioSampleLatitudeLongitude:' + filterBioSampleLatitudeLongitude });

		var filterBioSampleReferenceForBioMaterial = $formFilters.find('.valueBioSampleReferenceForBioMaterial').val();
		if(filterBioSampleReferenceForBioMaterial != null && filterBioSampleReferenceForBioMaterial !== '')
			filters.push({ name: 'fq', value: 'bioSampleReferenceForBioMaterial:' + filterBioSampleReferenceForBioMaterial });

		var filterBioSampleMaterialProcessing = $formFilters.find('.valueBioSampleMaterialProcessing').val();
		if(filterBioSampleMaterialProcessing != null && filterBioSampleMaterialProcessing !== '')
			filters.push({ name: 'fq', value: 'bioSampleMaterialProcessing:' + filterBioSampleMaterialProcessing });

		var filterBioSampleMaterialIdentifiers = $formFilters.find('.valueBioSampleMaterialIdentifiers').val();
		if(filterBioSampleMaterialIdentifiers != null && filterBioSampleMaterialIdentifiers !== '')
			filters.push({ name: 'fq', value: 'bioSampleMaterialIdentifiers:' + filterBioSampleMaterialIdentifiers });

		var filterBioSampleDisease = $formFilters.find('.valueBioSampleDisease').val();
		if(filterBioSampleDisease != null && filterBioSampleDisease !== '')
			filters.push({ name: 'fq', value: 'bioSampleDisease:' + filterBioSampleDisease });

		var filterBioSampleHostTissueSampled = $formFilters.find('.valueBioSampleHostTissueSampled').val();
		if(filterBioSampleHostTissueSampled != null && filterBioSampleHostTissueSampled !== '')
			filters.push({ name: 'fq', value: 'bioSampleHostTissueSampled:' + filterBioSampleHostTissueSampled });

		var filterBioSampleCollectedBy = $formFilters.find('.valueBioSampleCollectedBy').val();
		if(filterBioSampleCollectedBy != null && filterBioSampleCollectedBy !== '')
			filters.push({ name: 'fq', value: 'bioSampleCollectedBy:' + filterBioSampleCollectedBy });

		var filterTaxonomyId = $formFilters.find('.valueTaxonomyId').val();
		if(filterTaxonomyId != null && filterTaxonomyId !== '')
			filters.push({ name: 'fq', value: 'taxonomyId:' + filterTaxonomyId });

		var filterTaxonomyName = $formFilters.find('.valueTaxonomyName').val();
		if(filterTaxonomyName != null && filterTaxonomyName !== '')
			filters.push({ name: 'fq', value: 'taxonomyName:' + filterTaxonomyName });

		var filterTaxonomyUniqueName = $formFilters.find('.valueTaxonomyUniqueName').val();
		if(filterTaxonomyUniqueName != null && filterTaxonomyUniqueName !== '')
			filters.push({ name: 'fq', value: 'taxonomyUniqueName:' + filterTaxonomyUniqueName });

		var filterTaxonomyNameClass = $formFilters.find('.valueTaxonomyNameClass').val();
		if(filterTaxonomyNameClass != null && filterTaxonomyNameClass !== '')
			filters.push({ name: 'fq', value: 'taxonomyNameClass:' + filterTaxonomyNameClass });
	}
	return filters;
}

function patchSequenceRunVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSequenceRunVals(filters, vals, success, error);
}

function patchSequenceRunVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/run?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSequenceRun(pk) {
	$.ajax({
		url: '/api/run/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSequenceRun($formFilters, success, error) {
	var filters = searchSequenceRunFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSequenceRunVals(filters, success, error);
}

function searchSequenceRunFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterRunId = $formFilters.find('.valueRunId').val();
		if(filterRunId != null && filterRunId !== '')
			filters.push({ name: 'fq', value: 'runId:' + filterRunId });

		var filterRunReleaseDate = $formFilters.find('.valueRunReleaseDate').val();
		if(filterRunReleaseDate != null && filterRunReleaseDate !== '')
			filters.push({ name: 'fq', value: 'runReleaseDate:' + filterRunReleaseDate });

		var filterRunLoadDate = $formFilters.find('.valueRunLoadDate').val();
		if(filterRunLoadDate != null && filterRunLoadDate !== '')
			filters.push({ name: 'fq', value: 'runLoadDate:' + filterRunLoadDate });

		var filterProjectId = $formFilters.find('.valueProjectId').val();
		if(filterProjectId != null && filterProjectId !== '')
			filters.push({ name: 'fq', value: 'projectId:' + filterProjectId });

		var filterBioSampleId = $formFilters.find('.valueBioSampleId').val();
		if(filterBioSampleId != null && filterBioSampleId !== '')
			filters.push({ name: 'fq', value: 'bioSampleId:' + filterBioSampleId });

		var filterBioSampleIsolate = $formFilters.find('.valueBioSampleIsolate').val();
		if(filterBioSampleIsolate != null && filterBioSampleIsolate !== '')
			filters.push({ name: 'fq', value: 'bioSampleIsolate:' + filterBioSampleIsolate });

		var filterBioSampleHost = $formFilters.find('.valueBioSampleHost').val();
		if(filterBioSampleHost != null && filterBioSampleHost !== '')
			filters.push({ name: 'fq', value: 'bioSampleHost:' + filterBioSampleHost });

		var filterBioSampleLabHost = $formFilters.find('.valueBioSampleLabHost').val();
		if(filterBioSampleLabHost != null && filterBioSampleLabHost !== '')
			filters.push({ name: 'fq', value: 'bioSampleLabHost:' + filterBioSampleLabHost });

		var filterBioSampleIsolationSource = $formFilters.find('.valueBioSampleIsolationSource').val();
		if(filterBioSampleIsolationSource != null && filterBioSampleIsolationSource !== '')
			filters.push({ name: 'fq', value: 'bioSampleIsolationSource:' + filterBioSampleIsolationSource });

		var filterBioSampleGeographicLocation = $formFilters.find('.valueBioSampleGeographicLocation').val();
		if(filterBioSampleGeographicLocation != null && filterBioSampleGeographicLocation !== '')
			filters.push({ name: 'fq', value: 'bioSampleGeographicLocation:' + filterBioSampleGeographicLocation });

		var filterBioSampleLatitudeLongitude = $formFilters.find('.valueBioSampleLatitudeLongitude').val();
		if(filterBioSampleLatitudeLongitude != null && filterBioSampleLatitudeLongitude !== '')
			filters.push({ name: 'fq', value: 'bioSampleLatitudeLongitude:' + filterBioSampleLatitudeLongitude });

		var filterBioSampleReferenceForBioMaterial = $formFilters.find('.valueBioSampleReferenceForBioMaterial').val();
		if(filterBioSampleReferenceForBioMaterial != null && filterBioSampleReferenceForBioMaterial !== '')
			filters.push({ name: 'fq', value: 'bioSampleReferenceForBioMaterial:' + filterBioSampleReferenceForBioMaterial });

		var filterBioSampleMaterialProcessing = $formFilters.find('.valueBioSampleMaterialProcessing').val();
		if(filterBioSampleMaterialProcessing != null && filterBioSampleMaterialProcessing !== '')
			filters.push({ name: 'fq', value: 'bioSampleMaterialProcessing:' + filterBioSampleMaterialProcessing });

		var filterBioSampleMaterialIdentifiers = $formFilters.find('.valueBioSampleMaterialIdentifiers').val();
		if(filterBioSampleMaterialIdentifiers != null && filterBioSampleMaterialIdentifiers !== '')
			filters.push({ name: 'fq', value: 'bioSampleMaterialIdentifiers:' + filterBioSampleMaterialIdentifiers });

		var filterBioSampleDisease = $formFilters.find('.valueBioSampleDisease').val();
		if(filterBioSampleDisease != null && filterBioSampleDisease !== '')
			filters.push({ name: 'fq', value: 'bioSampleDisease:' + filterBioSampleDisease });

		var filterBioSampleHostTissueSampled = $formFilters.find('.valueBioSampleHostTissueSampled').val();
		if(filterBioSampleHostTissueSampled != null && filterBioSampleHostTissueSampled !== '')
			filters.push({ name: 'fq', value: 'bioSampleHostTissueSampled:' + filterBioSampleHostTissueSampled });

		var filterBioSampleCollectedBy = $formFilters.find('.valueBioSampleCollectedBy').val();
		if(filterBioSampleCollectedBy != null && filterBioSampleCollectedBy !== '')
			filters.push({ name: 'fq', value: 'bioSampleCollectedBy:' + filterBioSampleCollectedBy });

		var filterTaxonomyId = $formFilters.find('.valueTaxonomyId').val();
		if(filterTaxonomyId != null && filterTaxonomyId !== '')
			filters.push({ name: 'fq', value: 'taxonomyId:' + filterTaxonomyId });

		var filterTaxonomyName = $formFilters.find('.valueTaxonomyName').val();
		if(filterTaxonomyName != null && filterTaxonomyName !== '')
			filters.push({ name: 'fq', value: 'taxonomyName:' + filterTaxonomyName });

		var filterTaxonomyUniqueName = $formFilters.find('.valueTaxonomyUniqueName').val();
		if(filterTaxonomyUniqueName != null && filterTaxonomyUniqueName !== '')
			filters.push({ name: 'fq', value: 'taxonomyUniqueName:' + filterTaxonomyUniqueName });

		var filterTaxonomyNameClass = $formFilters.find('.valueTaxonomyNameClass').val();
		if(filterTaxonomyNameClass != null && filterTaxonomyNameClass !== '')
			filters.push({ name: 'fq', value: 'taxonomyNameClass:' + filterTaxonomyNameClass });
	}
	return filters;
}

function searchSequenceRunVals(filters, success, error) {
	$.ajax({
		url: '/api/run?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSequenceRunObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSequenceRunVals($formFilters, success, error);
}

async function websocketSequenceRun(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSequenceRun', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SequenceRunForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-pale-green ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-newspaper w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify sequence runs in ' + json.timeRemaining);
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-pale-green ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			if(numPATCH < numFound) {
				var $old_box = $('.box-' + id);
				if(!$old_box.size()) {
					$('.top-box').append($box);
				} else if($old_box && $old_box.attr('data-numPATCH') < numFound) {
					$('.box-' + id).html($margin);
				}
			} else {
				$('.box-' + id).remove();
			}
			if(pk && pkPage && pk == pkPage) {
				if(success)
					success(json);
			}
		});
	}
}
async function websocketSequenceRunInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSequenceRunVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSequenceRun' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSequenceRun' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSequenceRun' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSequenceRun' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSequenceRun' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSequenceRun' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'Deleted'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSequenceRun' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSequenceRun' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSequenceRun' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSequenceRun' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'ClassSimpleName'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSequenceRun' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputSequenceRun' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSequenceRun' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSequenceRun' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSequenceRun' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSequenceRun' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSequenceRun' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSequenceRun' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSequenceRun' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'PageUrlPk'));
			}
			var val = o['runId'];
			if(vars.includes('runId')) {
				$('.inputSequenceRun' + pk + 'RunId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'RunId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'RunId'));
			}
			var val = o['runReleaseDate'];
			if(vars.includes('runReleaseDate')) {
				$('.inputSequenceRun' + pk + 'RunReleaseDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'RunReleaseDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'RunReleaseDate'));
			}
			var val = o['runLoadDate'];
			if(vars.includes('runLoadDate')) {
				$('.inputSequenceRun' + pk + 'RunLoadDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'RunLoadDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'RunLoadDate'));
			}
			var val = o['projectId'];
			if(vars.includes('projectId')) {
				$('.inputSequenceRun' + pk + 'ProjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'ProjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'ProjectId'));
			}
			var val = o['bioSampleId'];
			if(vars.includes('bioSampleId')) {
				$('.inputSequenceRun' + pk + 'BioSampleId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'BioSampleId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'BioSampleId'));
			}
			var val = o['bioSampleIsolate'];
			if(vars.includes('bioSampleIsolate')) {
				$('.inputSequenceRun' + pk + 'BioSampleIsolate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'BioSampleIsolate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'BioSampleIsolate'));
			}
			var val = o['bioSampleHost'];
			if(vars.includes('bioSampleHost')) {
				$('.inputSequenceRun' + pk + 'BioSampleHost').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'BioSampleHost').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'BioSampleHost'));
			}
			var val = o['bioSampleLabHost'];
			if(vars.includes('bioSampleLabHost')) {
				$('.inputSequenceRun' + pk + 'BioSampleLabHost').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'BioSampleLabHost').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'BioSampleLabHost'));
			}
			var val = o['bioSampleIsolationSource'];
			if(vars.includes('bioSampleIsolationSource')) {
				$('.inputSequenceRun' + pk + 'BioSampleIsolationSource').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'BioSampleIsolationSource').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'BioSampleIsolationSource'));
			}
			var val = o['bioSampleGeographicLocation'];
			if(vars.includes('bioSampleGeographicLocation')) {
				$('.inputSequenceRun' + pk + 'BioSampleGeographicLocation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'BioSampleGeographicLocation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'BioSampleGeographicLocation'));
			}
			var val = o['bioSampleLatitudeLongitude'];
			if(vars.includes('bioSampleLatitudeLongitude')) {
				$('.inputSequenceRun' + pk + 'BioSampleLatitudeLongitude').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'BioSampleLatitudeLongitude').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'BioSampleLatitudeLongitude'));
			}
			var val = o['bioSampleReferenceForBioMaterial'];
			if(vars.includes('bioSampleReferenceForBioMaterial')) {
				$('.inputSequenceRun' + pk + 'BioSampleReferenceForBioMaterial').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'BioSampleReferenceForBioMaterial').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'BioSampleReferenceForBioMaterial'));
			}
			var val = o['bioSampleMaterialProcessing'];
			if(vars.includes('bioSampleMaterialProcessing')) {
				$('.inputSequenceRun' + pk + 'BioSampleMaterialProcessing').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'BioSampleMaterialProcessing').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'BioSampleMaterialProcessing'));
			}
			var val = o['bioSampleMaterialIdentifiers'];
			if(vars.includes('bioSampleMaterialIdentifiers')) {
				$('.inputSequenceRun' + pk + 'BioSampleMaterialIdentifiers').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'BioSampleMaterialIdentifiers').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'BioSampleMaterialIdentifiers'));
			}
			var val = o['bioSampleDisease'];
			if(vars.includes('bioSampleDisease')) {
				$('.inputSequenceRun' + pk + 'BioSampleDisease').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'BioSampleDisease').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'BioSampleDisease'));
			}
			var val = o['bioSampleHostTissueSampled'];
			if(vars.includes('bioSampleHostTissueSampled')) {
				$('.inputSequenceRun' + pk + 'BioSampleHostTissueSampled').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'BioSampleHostTissueSampled').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'BioSampleHostTissueSampled'));
			}
			var val = o['bioSampleCollectedBy'];
			if(vars.includes('bioSampleCollectedBy')) {
				$('.inputSequenceRun' + pk + 'BioSampleCollectedBy').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'BioSampleCollectedBy').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'BioSampleCollectedBy'));
			}
			var val = o['taxonomyId'];
			if(vars.includes('taxonomyId')) {
				$('.inputSequenceRun' + pk + 'TaxonomyId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'TaxonomyId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'TaxonomyId'));
			}
			var val = o['taxonomyName'];
			if(vars.includes('taxonomyName')) {
				$('.inputSequenceRun' + pk + 'TaxonomyName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'TaxonomyName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'TaxonomyName'));
			}
			var val = o['taxonomyUniqueName'];
			if(vars.includes('taxonomyUniqueName')) {
				$('.inputSequenceRun' + pk + 'TaxonomyUniqueName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'TaxonomyUniqueName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'TaxonomyUniqueName'));
			}
			var val = o['taxonomyNameClass'];
			if(vars.includes('taxonomyNameClass')) {
				$('.inputSequenceRun' + pk + 'TaxonomyNameClass').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSequenceRun' + pk + 'TaxonomyNameClass').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSequenceRun' + pk + 'TaxonomyNameClass'));
			}
		});
	}
}
