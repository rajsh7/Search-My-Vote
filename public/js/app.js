/**
 * SEARCH MY VOTE — Client Application Logic
 * 3D Card Flip: File a Complaint ↔ Track Complaint
 * Cascading Hierarchy: State -> District -> Lok Sabha -> Assembly
 * Dual-Credential System: Case Reference (SMV-2026-XXXXXXXXXX) + Private Tracking PIN
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements - Location & Dropdowns
  const stateSelect = document.getElementById('stateSelect');
  const districtSelect = document.getElementById('districtSelect');
  const districtCustom = document.getElementById('districtCustom');
  const lokSabhaSelect = document.getElementById('lokSabhaSelect');
  const lokSabhaCustom = document.getElementById('lokSabhaCustom');
  const assemblySelect = document.getElementById('assemblySelect');
  const assemblyCustom = document.getElementById('assemblyCustom');

  const natureSelect = document.getElementById('natureSelect');
  const sirStageSelect = document.getElementById('sirStageSelect');
  const voterCardStatusSelect = document.getElementById('voterCardStatusSelect');
  const sourceSelect = document.getElementById('sourceSelect');

  // Contact & Personal Fields
  const fullNameInput = document.getElementById('fullName');
  const mobileInput = document.getElementById('mobile');
  const emailInput = document.getElementById('email');
  const postcodeInput = document.getElementById('postcode');
  const addressLineInput = document.getElementById('addressLine');

  // Location Extra Fields
  const villageWardInput = document.getElementById('villageWard');
  const pollingStationInput = document.getElementById('pollingStation');
  const rollPartInput = document.getElementById('rollPart');
  const rollSerialInput = document.getElementById('rollSerial');

  // Grievance Details Fields
  const incidentDateInput = document.getElementById('incidentDate');
  const epicNumberInput = document.getElementById('epicNumber');
  const lastSeenInput = document.getElementById('lastSeen');
  const eciClaimRefInput = document.getElementById('eciClaimRef');
  const descriptionInput = document.getElementById('description');

  // Proof Upload Fields
  const proofFileInput = document.getElementById('proofFile');
  const selectedFileDisplay = document.getElementById('selectedFileDisplay');
  const errProof = document.getElementById('errProof');

  // Consent Fields
  const consentRequired = document.getElementById('consentRequired');
  const consentRepresentation = document.getElementById('consentRepresentation');

  // Form & Buttons
  const form = document.getElementById('grievanceForm');
  const resetBtn = document.getElementById('resetBtn');
  const submitBtn = document.getElementById('submitBtn');
  const submitSpinner = document.getElementById('submitSpinner');
  const submitBtnCaption = submitBtn ? submitBtn.querySelector('.btn-caption') : null;

  // 3D Card Flip Elements
  const cardFlipper = document.getElementById('cardFlipper');
  const cardFaceFront = document.getElementById('cardFaceFront');
  const cardFaceBack = document.getElementById('cardFaceBack');
  const tabBtnFile = document.getElementById('tabBtnFile');
  const tabBtnTrack = document.getElementById('tabBtnTrack');

  // Success Modal Elements
  const successModal = document.getElementById('successModal');
  const modalCaseRef = document.getElementById('modalCaseRef');
  const modalTrackingPin = document.getElementById('modalTrackingPin');
  const copyCaseRefBtn = document.getElementById('copyCaseRefBtn');
  const copyCaseRefText = document.getElementById('copyCaseRefText');
  const copyPinBtn = document.getElementById('copyPinBtn');
  const copyPinText = document.getElementById('copyPinText');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const modalDownloadReceiptBtn = document.getElementById('modalDownloadReceiptBtn');
  const modalTrackNowBtn = document.getElementById('modalTrackNowBtn');

  // Tracking Elements
  const trackCaseRef = document.getElementById('trackCaseRef');
  const trackPin = document.getElementById('trackPin');
  const trackSubmitBtn = document.getElementById('trackSubmitBtn');
  const trackSpinner = document.getElementById('trackSpinner');
  const trackErrorMsg = document.getElementById('trackErrorMsg');
  const trackCardResult = document.getElementById('trackCardResult');

  // In-memory file state
  let currentProofData = '';
  let currentProofName = '';
  let currentProofMime = '';

  // In-memory last submitted record (for receipt download)
  let lastSubmittedRecord = null;

  // Scroll helper
  window.scrollToForm = function() {
    const card = document.getElementById('cardFlipper');
    if (card) {
      card.scrollIntoView();
    }
  };

  // ==========================================
  // 1. 3D CARD FLIP SWITCHER
  // ==========================================
  window.flipCard = function(target) {
    if (target === 'track') {
      cardFlipper.classList.add('is-flipped');
      tabBtnTrack.classList.add('active');
      tabBtnFile.classList.remove('active');

      setTimeout(() => {
        if (cardFlipper.classList.contains('is-flipped')) {
          cardFaceBack.style.position = 'relative';
          cardFaceFront.style.position = 'absolute';
        }
      }, 300);

      setTimeout(() => {
        if (trackCaseRef) trackCaseRef.focus();
      }, 350);
    } else {
      cardFaceBack.style.position = 'absolute';
      cardFaceFront.style.position = 'relative';
      cardFlipper.classList.remove('is-flipped');
      tabBtnFile.classList.add('active');
      tabBtnTrack.classList.remove('active');
    }

    if (window.scrollY < 220) {
      const card = document.getElementById('cardFlipper');
      if (card) card.scrollIntoView();
    }
  };

  // ==========================================
  // 2. POPULATE INITIAL DROPDOWNS
  // ==========================================
  function initDropdowns() {
    // Populate States & UTs
    if (typeof ALL_STATES_UTS !== 'undefined') {
      const states = ALL_STATES_UTS.slice().sort();
      states.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s;
        opt.textContent = s;
        stateSelect.appendChild(opt);
      });
    }

    // Populate Grievance Nature
    if (typeof GRIEVANCE_TYPES !== 'undefined') {
      GRIEVANCE_TYPES.forEach(type => {
        const opt = document.createElement('option');
        opt.value = type;
        opt.textContent = type;
        natureSelect.appendChild(opt);
      });
    }

    // Populate Stage of SIR
    if (typeof SIR_STAGES !== 'undefined') {
      SIR_STAGES.forEach(stage => {
        const opt = document.createElement('option');
        opt.value = stage;
        opt.textContent = stage;
        sirStageSelect.appendChild(opt);
      });
    }

    // Populate Voter Card Statuses
    if (typeof VOTER_CARD_STATUSES !== 'undefined') {
      VOTER_CARD_STATUSES.forEach(st => {
        const opt = document.createElement('option');
        opt.value = st;
        opt.textContent = st;
        voterCardStatusSelect.appendChild(opt);
      });
    }

    // Populate Source Types
    if (typeof SOURCE_TYPES !== 'undefined') {
      SOURCE_TYPES.forEach(src => {
        const opt = document.createElement('option');
        opt.value = src;
        opt.textContent = src;
        sourceSelect.appendChild(opt);
      });
    }
  }

  function resetSelect(select, defaultText) {
    select.innerHTML = `<option value="">${defaultText}</option>`;
    select.disabled = true;
  }

  // ==========================================
  // 3. CASCADING LOCATION PROCEDURE
  // State -> District -> Lok Sabha -> Assembly
  // ==========================================
  function populateAssemblies(selectedState, selectedDistrict, selectedLs) {
    resetSelect(assemblySelect, 'Select Assembly constituency');
    assemblyCustom.style.display = 'none';
    assemblyCustom.value = '';

    if (!selectedLs) return;

    if (selectedLs === '__other__') {
      assemblyCustom.style.display = 'block';
      assemblyCustom.placeholder = 'Enter Assembly Constituency';
      assemblyCustom.focus();
      return;
    }

    const stateData = (typeof INDIA_DATA !== 'undefined') ? INDIA_DATA[selectedState] : null;
    const distData = stateData?.districts?.[selectedDistrict];
    const assemblies = distData?.lokSabha?.[selectedLs];

    if (assemblies && assemblies.length > 0) {
      assemblies.slice().sort().forEach(ac => {
        const opt = document.createElement('option');
        opt.value = ac;
        opt.textContent = ac;
        assemblySelect.appendChild(opt);
      });

      const otherAc = document.createElement('option');
      otherAc.value = '__other__';
      otherAc.textContent = '✎ Other Assembly (Specify)';
      assemblySelect.appendChild(otherAc);

      assemblySelect.disabled = false;
    } else {
      assemblyCustom.style.display = 'block';
      assemblyCustom.placeholder = 'Enter Assembly Constituency';
    }
  }

  // State Change
  stateSelect.addEventListener('change', () => {
    const selectedState = stateSelect.value;

    resetSelect(districtSelect, 'Select district');
    districtCustom.style.display = 'none';
    districtCustom.value = '';

    resetSelect(lokSabhaSelect, 'Select Lok Sabha constituency');
    lokSabhaCustom.style.display = 'none';
    lokSabhaCustom.value = '';

    resetSelect(assemblySelect, 'Select Assembly constituency');
    assemblyCustom.style.display = 'none';
    assemblyCustom.value = '';

    if (!selectedState) return;

    const stateData = (typeof INDIA_DATA !== 'undefined') ? INDIA_DATA[selectedState] : null;
    if (stateData && stateData.districts && Object.keys(stateData.districts).length > 0) {
      const districts = Object.keys(stateData.districts).sort();
      districts.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d;
        opt.textContent = d;
        districtSelect.appendChild(opt);
      });

      const otherOpt = document.createElement('option');
      otherOpt.value = '__other__';
      otherOpt.textContent = '✎ Other District (Specify)';
      districtSelect.appendChild(otherOpt);

      districtSelect.disabled = false;
    } else {
      districtCustom.style.display = 'block';
      districtCustom.placeholder = `Enter District in ${selectedState}`;
      lokSabhaCustom.style.display = 'block';
      lokSabhaCustom.placeholder = 'Enter Lok Sabha Constituency';
      assemblyCustom.style.display = 'block';
      assemblyCustom.placeholder = 'Enter Assembly Constituency';
    }
  });

  // District Change
  districtSelect.addEventListener('change', () => {
    const selectedState = stateSelect.value;
    const selectedDistrict = districtSelect.value;

    resetSelect(lokSabhaSelect, 'Select Lok Sabha constituency');
    lokSabhaCustom.style.display = 'none';
    lokSabhaCustom.value = '';

    resetSelect(assemblySelect, 'Select Assembly constituency');
    assemblyCustom.style.display = 'none';
    assemblyCustom.value = '';

    if (!selectedDistrict) return;

    if (selectedDistrict === '__other__') {
      districtCustom.style.display = 'block';
      districtCustom.focus();
      lokSabhaCustom.style.display = 'block';
      lokSabhaCustom.placeholder = 'Enter Lok Sabha Constituency';
      assemblyCustom.style.display = 'block';
      assemblyCustom.placeholder = 'Enter Assembly Constituency';
      return;
    } else {
      districtCustom.style.display = 'none';
    }

    const stateData = (typeof INDIA_DATA !== 'undefined') ? INDIA_DATA[selectedState] : null;
    const distData = stateData?.districts?.[selectedDistrict];

    if (distData && distData.lokSabha && Object.keys(distData.lokSabha).length > 0) {
      const lsList = Object.keys(distData.lokSabha).sort();
      lsList.forEach(ls => {
        const opt = document.createElement('option');
        opt.value = ls;
        opt.textContent = ls;
        lokSabhaSelect.appendChild(opt);
      });

      const otherLs = document.createElement('option');
      otherLs.value = '__other__';
      otherLs.textContent = '✎ Other Lok Sabha (Specify)';
      lokSabhaSelect.appendChild(otherLs);

      lokSabhaSelect.disabled = false;

      // Auto-select if only 1 Lok Sabha constituency exists
      if (lsList.length === 1) {
        lokSabhaSelect.value = lsList[0];
        populateAssemblies(selectedState, selectedDistrict, lsList[0]);
      }
    } else {
      lokSabhaCustom.style.display = 'block';
      lokSabhaCustom.placeholder = 'Enter Lok Sabha Constituency';
      assemblyCustom.style.display = 'block';
      assemblyCustom.placeholder = 'Enter Assembly Constituency';
    }
  });

  // Lok Sabha Change
  lokSabhaSelect.addEventListener('change', () => {
    const selectedState = stateSelect.value;
    const selectedDistrict = districtSelect.value;
    const selectedLs = lokSabhaSelect.value;

    populateAssemblies(selectedState, selectedDistrict, selectedLs);
  });

  // Assembly Change
  assemblySelect.addEventListener('change', () => {
    if (assemblySelect.value === '__other__') {
      assemblyCustom.style.display = 'block';
      assemblyCustom.placeholder = 'Enter Assembly Constituency';
      assemblyCustom.focus();
    } else {
      assemblyCustom.style.display = 'none';
    }
  });

  // ==========================================
  // 4. PROOF FILE ATTACHMENT HANDLER (Max 6MB)
  // ==========================================
  function clearSelectedFile() {
    currentProofData = '';
    currentProofName = '';
    currentProofMime = '';
    proofFileInput.value = '';
    selectedFileDisplay.innerHTML = '';
    selectedFileDisplay.style.display = 'none';
    if (errProof) errProof.textContent = '';
  }

  proofFileInput.addEventListener('change', (e) => {
    if (errProof) errProof.textContent = '';
    const file = e.target.files && e.target.files[0];
    if (!file) {
      clearSelectedFile();
      return;
    }

    const MAX_BYTES = 6 * 1024 * 1024; // 6 MB
    if (file.size > MAX_BYTES) {
      if (errProof) errProof.textContent = 'Attached file exceeds the 6 MB limit. Please select a smaller file.';
      clearSelectedFile();
      return;
    }

    const allowedExts = ['pdf', 'jpg', 'jpeg', 'png', 'webp'];
    const ext = file.name.split('.').pop().toLowerCase();
    if (!allowedExts.includes(ext)) {
      if (errProof) errProof.textContent = 'Invalid file format. Allowed formats: PDF, JPG, PNG, WEBP.';
      clearSelectedFile();
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      currentProofData = event.target.result;
      currentProofName = file.name;
      currentProofMime = file.type || 'application/octet-stream';

      const sizeKb = (file.size / 1024).toFixed(1);
      selectedFileDisplay.style.display = 'block';
      selectedFileDisplay.innerHTML = `
        <div class="selected-file-pill">
          <span>📎 ${file.name} (${sizeKb} KB)</span>
          <button type="button" id="removeFileBtn" style="background:none; border:none; color:#dc2626; cursor:pointer; font-weight:bold; margin-left:6px;" title="Remove attachment">✕</button>
        </div>
      `;

      document.getElementById('removeFileBtn').addEventListener('click', (ev) => {
        ev.preventDefault();
        clearSelectedFile();
      });
    };

    reader.onerror = () => {
      if (errProof) errProof.textContent = 'Failed to read file. Please try again.';
      clearSelectedFile();
    };

    reader.readAsDataURL(file);
  });

  // ==========================================
  // 5. FORM VALIDATION & SUBMISSION
  // ==========================================
  function clearErrors() {
    document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
    document.querySelectorAll('.form-group.has-error').forEach(el => el.classList.remove('has-error'));
  }

  function setFieldError(groupId, errorId, message) {
    const group = document.getElementById(groupId);
    const err = document.getElementById(errorId);
    if (group) group.classList.add('has-error');
    if (err) err.textContent = message;
  }

  function getResolvedLocation() {
    const state = stateSelect.value.trim();

    let district = districtSelect.value;
    if (district === '__other__' || !district) {
      district = districtCustom.value.trim();
    }

    let lokSabha = lokSabhaSelect.value;
    if (lokSabha === '__other__' || !lokSabha) {
      lokSabha = lokSabhaCustom.value.trim();
    }

    let assembly = assemblySelect.value;
    if (assembly === '__other__' || !assembly) {
      assembly = assemblyCustom.value.trim();
    }

    return { state, district, lokSabha, assembly };
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors();

    const fullName = fullNameInput.value.trim();
    const mobile = mobileInput.value.trim().replace(/\D/g, '');
    const email = emailInput.value.trim();
    const postcode = postcodeInput.value.trim();
    const addressLine = addressLineInput.value.trim();

    const loc = getResolvedLocation();
    const villageWard = villageWardInput.value.trim();
    const pollingStation = pollingStationInput.value.trim();
    const rollPart = rollPartInput.value.trim();
    const rollSerial = rollSerialInput.value.trim();

    const grievanceNature = natureSelect.value.trim();
    const sirStage = sirStageSelect.value.trim();
    const incidentDate = incidentDateInput.value.trim();
    const voterCardStatus = voterCardStatusSelect.value.trim();
    const epic = epicNumberInput.value.trim().toUpperCase();
    const lastSeen = lastSeenInput.value.trim();
    const eciClaimRef = eciClaimRefInput.value.trim();
    const description = descriptionInput.value.trim();

    const source = sourceSelect.value.trim();
    const isConsentRequiredChecked = consentRequired.checked;
    const isConsentRepresentationChecked = consentRepresentation.checked;

    let isValid = true;

    // Validate Full Name
    if (!fullName) {
      setFieldError('grpFullName', 'errFullName', 'Full Name / पूरा नाम is required.');
      isValid = false;
    } else if (fullName.length < 2) {
      setFieldError('grpFullName', 'errFullName', 'Name must be at least 2 characters.');
      isValid = false;
    }

    // Validate Mobile
    if (!mobile) {
      setFieldError('grpMobile', 'errMobile', 'Mobile number / मोबाइल नंबर is required.');
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(mobile)) {
      setFieldError('grpMobile', 'errMobile', 'Enter a valid 10-digit Indian mobile (starts with 6-9).');
      isValid = false;
    }

    // Validate Email if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFieldError('grpEmail', 'errEmail', 'Please enter a valid email address.');
      isValid = false;
    }

    // Validate Postcode if provided
    if (postcode && !/^\d{6}$/.test(postcode)) {
      setFieldError('grpPostcode', 'errPostcode', 'Please enter a valid 6-digit PIN code.');
      isValid = false;
    }

    // Validate State
    if (!loc.state) {
      setFieldError('grpState', 'errState', 'Please select a State or UT / राज्य चुनें.');
      isValid = false;
    }

    // Validate District
    if (!loc.district) {
      setFieldError('grpDistrict', 'errDistrict', 'Please specify your District / जिला.');
      isValid = false;
    }

    // Validate Grievance Nature
    if (!grievanceNature) {
      setFieldError('grpNature', 'errNature', 'Please select the Nature of complaint / शिकायत का प्रकार.');
      isValid = false;
    }

    // Validate Voter Card Status
    if (!voterCardStatus) {
      setFieldError('grpVoterCardStatus', 'errVoterCardStatus', 'Please select Voter ID card status.');
      isValid = false;
    }

    // Validate Description
    if (!description) {
      setFieldError('grpDescription', 'errDescription', 'Please explain what happened / पूरी शिकायत लिखें.');
      isValid = false;
    } else if (description.length < 5) {
      setFieldError('grpDescription', 'errDescription', 'Please provide a clear description of the issue.');
      isValid = false;
    }

    // Validate Mandatory Consent Checkbox
    if (!isConsentRequiredChecked) {
      const errConsent = document.getElementById('errConsent');
      if (errConsent) errConsent.textContent = 'You must confirm the accuracy of your submission to proceed.';
      isValid = false;
    }

    if (!isValid) return;

    // Build payload
    const payload = {
      full_name: fullName,
      mobile: mobile,
      email: email,
      postcode: postcode,
      address_line: addressLine,
      state: loc.state,
      district: loc.district,
      lok_sabha: loc.lokSabha,
      assembly: loc.assembly,
      village_ward: villageWard,
      polling_station: pollingStation,
      roll_part: rollPart,
      roll_serial: rollSerial,
      grievance_nature: grievanceNature,
      sir_stage: sirStage,
      incident_date: incidentDate,
      voter_card_status: voterCardStatus,
      epic: epic,
      last_seen: lastSeen,
      eci_claim_ref: eciClaimRef,
      description: description,
      proof_name: currentProofName,
      proof_data: currentProofData,
      proof_mime: currentProofMime,
      source: source,
      consent_representation: isConsentRepresentationChecked
    };

    submitBtn.disabled = true;
    submitSpinner.style.display = 'inline-block';
    if (submitBtnCaption) submitBtnCaption.textContent = 'Registering SIR Grievance...';

    try {
      const response = await fetch('/api/grievances', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        lastSubmittedRecord = {
          ticket_id: resData.ticket_id,
          tracking_pin: resData.tracking_pin,
          created_at: new Date().toISOString(),
          ...payload
        };

        modalCaseRef.textContent = resData.ticket_id;
        modalTrackingPin.textContent = resData.tracking_pin;
        successModal.classList.add('active');

        // Reset form & state
        form.reset();
        clearSelectedFile();
        resetSelect(districtSelect, 'Select district');
        resetSelect(lokSabhaSelect, 'Select Lok Sabha constituency');
        resetSelect(assemblySelect, 'Select Assembly constituency');
        districtCustom.style.display = 'none';
        lokSabhaCustom.style.display = 'none';
        assemblyCustom.style.display = 'none';
      } else {
        alert(resData.error || 'Failed to submit grievance. Please verify details and try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Network communication error. Please check your internet connection.');
    } finally {
      submitBtn.disabled = false;
      submitSpinner.style.display = 'none';
      if (submitBtnCaption) submitBtnCaption.textContent = 'Submit SIR grievance ↗';
    }
  });

  // Reset Button handler
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      clearErrors();
      clearSelectedFile();
      resetSelect(districtSelect, 'Select district');
      resetSelect(lokSabhaSelect, 'Select Lok Sabha constituency');
      resetSelect(assemblySelect, 'Select Assembly constituency');
      districtCustom.style.display = 'none';
      lokSabhaCustom.style.display = 'none';
      assemblyCustom.style.display = 'none';
    });
  }

  // ==========================================
  // 6. MODAL INTERACTIONS & RECEIPT DOWNLOAD
  // ==========================================
  modalDismissBtn.addEventListener('click', () => {
    successModal.classList.remove('active');
  });

  function setupCopyButton(btn, textEl, getCodeFn) {
    if (!btn) return;
    btn.addEventListener('click', () => {
      const code = getCodeFn();
      if (!code) return;
      navigator.clipboard.writeText(code).then(() => {
        textEl.textContent = 'Copied! ✓';
        btn.style.color = '#15803d';
        setTimeout(() => {
          textEl.textContent = 'Copy';
          btn.style.color = '';
        }, 2500);
      }).catch(() => {
        prompt('Copy manually:', code);
      });
    });
  }

  setupCopyButton(copyCaseRefBtn, copyCaseRefText, () => modalCaseRef.textContent.trim());
  setupCopyButton(copyPinBtn, copyPinText, () => modalTrackingPin.textContent.trim());

  modalTrackNowBtn.addEventListener('click', () => {
    const caseRef = modalCaseRef.textContent.trim();
    const pin = modalTrackingPin.textContent.trim();
    successModal.classList.remove('active');
    trackCaseRef.value = caseRef;
    trackPin.value = pin;
    flipCard('track');
    performTrackLookup(caseRef, pin);
  });

  // Download Receipt Generator
  if (modalDownloadReceiptBtn) {
    modalDownloadReceiptBtn.addEventListener('click', () => {
      const rec = lastSubmittedRecord;
      if (!rec) return;

      const dateStr = new Date(rec.created_at).toLocaleString('en-IN', {
        dateStyle: 'full',
        timeStyle: 'medium'
      });

      const receiptText = `====================================================================
SEARCH MY VOTE — CITIZEN GRIEVANCE INTAKE RECEIPT
Central Civic Redressal Helpline & Legal Aid Portal
Website: https://searchmyvote.com | Email: grievance@searchmyvote.in
====================================================================

CASE CREDENTIALS (SAVE BOTH FOR TRACKING)
--------------------------------------------------------------------
Case Reference Number : ${rec.ticket_id}
Private Tracking PIN  : ${rec.tracking_pin}
Filing Date & Time    : ${dateStr}
Status                : Received / Logged in Central Register

CITIZEN DETAILS
--------------------------------------------------------------------
Full Name             : ${rec.full_name}
Mobile Number         : +91 ${rec.mobile}
Email Address         : ${rec.email || 'Not provided'}
Address / PIN Code    : ${rec.address_line || '—'}${rec.postcode ? ' (' + rec.postcode + ')' : ''}

CONSTITUENCY REGISTRATION LOCATION
--------------------------------------------------------------------
State / UT            : ${rec.state}
District              : ${rec.district}
Lok Sabha             : ${rec.lok_sabha || 'Not specified'}
Assembly              : ${rec.assembly || 'Not specified'}
Village / Ward        : ${rec.village_ward || 'Not specified'}
Polling Station       : ${rec.polling_station || 'Not specified'}
Roll Part / Serial    : Part ${rec.roll_part || '—'} / Serial ${rec.roll_serial || '—'}

SIR 2026 GRIEVANCE PARTICULARS
--------------------------------------------------------------------
Nature of Complaint   : ${rec.grievance_nature}
Stage of SIR          : ${rec.sir_stage || 'Not specified'}
Incident / Notice Date: ${rec.incident_date || 'Not specified'}
Voter Card Status     : ${rec.voter_card_status}
EPIC / Voter ID No.   : ${rec.epic || 'None'}
Last Time in Roll     : ${rec.last_seen || 'Not specified'}
Existing ECI App No.  : ${rec.eci_claim_ref || 'None'}
Proof Attached        : ${rec.proof_name || 'None'}

CITIZEN STATEMENT:
${rec.description}

LEGAL NOTICE & PRIVACY
--------------------------------------------------------------------
Search My Vote is a non-governmental civic assistance and democratic advocacy
initiative by Lok Dal. This platform does not directly modify official voter
registers. Submissions are documented for lawful casework, verification,
and constitutional voter representation.

Keep your Case Reference and PIN secure. For privacy, case status cannot
be accessed with only a phone number.
====================================================================`;

      const blob = new Blob([receiptText], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `SearchMyVote_Receipt_${rec.ticket_id}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
      successModal.classList.remove('active');
    }
  });

  // ==========================================
  // 7. TRACK COMPLAINT LOGIC (Dual-Credential)
  // ==========================================
  async function performTrackLookup(overrideRef, overridePin) {
    const caseRef = (overrideRef || trackCaseRef.value).trim().toUpperCase();
    const pin = (overridePin || trackPin.value).trim().toUpperCase();

    trackErrorMsg.textContent = '';
    trackCardResult.style.display = 'none';

    if (!caseRef) {
      trackErrorMsg.textContent = 'Please enter your Case reference number (e.g. SMV-2026-XXXXXXXXXX).';
      trackCaseRef.focus();
      return;
    }

    if (!pin) {
      trackErrorMsg.textContent = 'Please enter your 10-character Private tracking PIN.';
      trackPin.focus();
      return;
    }

    trackSubmitBtn.disabled = true;
    trackSpinner.style.display = 'inline-block';

    try {
      const response = await fetch('/api/grievances/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ case_ref: caseRef, pin: pin })
      });

      const data = await response.json();

      if (response.ok && data.ticket_id) {
        document.getElementById('resTicketId').textContent = data.ticket_id;
        document.getElementById('resName').textContent = data.full_name;
        document.getElementById('resMobile').textContent = `+91 ${data.mobile}`;
        document.getElementById('resNature').textContent = data.grievance_nature;
        document.getElementById('resDate').textContent = new Date(data.created_at).toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        const resStage = document.getElementById('resStage');
        if (resStage) resStage.textContent = data.sir_stage || 'Not specified';

        const resCardStatus = document.getElementById('resCardStatus');
        if (resCardStatus) {
          resCardStatus.textContent = data.epic ? `${data.voter_card_status} (EPIC: ${data.epic})` : (data.voter_card_status || '—');
        }

        // Set status pill
        const statusPill = document.getElementById('resStatusPill');
        statusPill.textContent = data.status || 'Received';
        const normalizedStatus = (data.status || 'received').toLowerCase().replace(/[^a-z0-9]/g, '-');
        statusPill.className = `status-pill ${normalizedStatus}`;

        // Set constituency trail
        document.getElementById('resState').textContent = data.state;
        document.getElementById('resDistrict').textContent = data.district;
        document.getElementById('resLokSabha').textContent = data.lok_sabha || '—';
        document.getElementById('resAssembly').textContent = data.assembly || '—';

        // Additional Details
        const resAdditional = document.getElementById('resAdditionalDetails');
        if (resAdditional) {
          const extras = [];
          if (data.village_ward) extras.push(`Village / Ward: <strong>${data.village_ward}</strong>`);
          if (data.polling_station) extras.push(`Booth / Polling Station: <strong>${data.polling_station}</strong>`);
          if (data.roll_part || data.roll_serial) extras.push(`Roll Part / Serial: <strong>Part ${data.roll_part || '—'} / Sr. ${data.roll_serial || '—'}</strong>`);
          if (data.eci_claim_ref) extras.push(`ECI Claim Ref: <strong>${data.eci_claim_ref}</strong>`);
          resAdditional.innerHTML = extras.join(' &nbsp;•&nbsp; ');
        }

        // Attached proof
        const proofCont = document.getElementById('resProofContainer');
        const proofPill = document.getElementById('resProofPill');
        if (proofCont && proofPill) {
          if (data.proof_name) {
            proofCont.style.display = 'block';
            if (data.proof_data) {
              proofPill.innerHTML = `<a href="${data.proof_data}" download="${data.proof_name}" style="color:var(--dp-color-ink); text-decoration:none;">📎 ${data.proof_name} (Click to download)</a>`;
            } else {
              proofPill.textContent = `📎 ${data.proof_name} (Attached)`;
            }
          } else {
            proofCont.style.display = 'none';
          }
        }

        // Citizen's description
        const resDesc = document.getElementById('resDescription');
        if (resDesc) {
          resDesc.textContent = data.description || 'No additional statement provided.';
        }

        // Caseworker Remarks
        document.getElementById('resRemarks').textContent =
          data.admin_remarks || 'Your complaint is actively documented in the central register. Initial intake review is underway.';

        trackCardResult.style.display = 'block';
      } else {
        trackErrorMsg.textContent = data.error || `No record found for Case Reference "${caseRef}". Please verify your Reference number and PIN.`;
      }
    } catch (err) {
      console.error(err);
      trackErrorMsg.textContent = 'Unable to connect to tracking server. Please try again.';
    } finally {
      trackSubmitBtn.disabled = false;
      trackSpinner.style.display = 'none';
    }
  }

  trackSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    performTrackLookup();
  });

  [trackCaseRef, trackPin].forEach(inp => {
    if (inp) {
      inp.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          performTrackLookup();
        }
      });
    }
  });

  // Initialize dropdowns on boot
  initDropdowns();
});
