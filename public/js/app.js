/**
 * SEARCH MY VOTE — Client Application Logic
 * 3D Card Flip: File a Complaint ↔ Track Complaint
 * Cascading Hierarchy: State -> District -> Lok Sabha -> Assembly
 * Real-time Ticket Generation & Tracking (e.g. 2026NAME01)
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const stateSelect = document.getElementById('stateSelect');
  const districtSelect = document.getElementById('districtSelect');
  const districtCustom = document.getElementById('districtCustom');
  const lokSabhaSelect = document.getElementById('lokSabhaSelect');
  const lokSabhaCustom = document.getElementById('lokSabhaCustom');
  const assemblySelect = document.getElementById('assemblySelect');
  const assemblyCustom = document.getElementById('assemblyCustom');
  const natureSelect = document.getElementById('natureSelect');

  const form = document.getElementById('grievanceForm');
  const submitBtn = document.getElementById('submitBtn');
  const submitSpinner = document.getElementById('submitSpinner');
  const submitBtnCaption = submitBtn ? submitBtn.querySelector('.btn-caption') : null;

  const cardFlipper = document.getElementById('cardFlipper');
  const cardFaceFront = document.getElementById('cardFaceFront');
  const cardFaceBack = document.getElementById('cardFaceBack');
  const tabBtnFile = document.getElementById('tabBtnFile');
  const tabBtnTrack = document.getElementById('tabBtnTrack');

  const successModal = document.getElementById('successModal');
  const modalTicketCode = document.getElementById('modalTicketCode');
  const copyTicketBtn = document.getElementById('copyTicketBtn');
  const copyBtnText = document.getElementById('copyBtnText');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const modalTrackNowBtn = document.getElementById('modalTrackNowBtn');

  const trackInput = document.getElementById('trackInput');
  const trackSubmitBtn = document.getElementById('trackSubmitBtn');
  const trackSpinner = document.getElementById('trackSpinner');
  const trackErrorMsg = document.getElementById('trackErrorMsg');
  const trackCardResult = document.getElementById('trackCardResult');

  // Scroll to form function
  window.scrollToForm = function() {
    const card = document.getElementById('cardFlipper');
    if (card) {
      card.scrollIntoView();
    }
  };

  // ==========================================
  // 1. 3D CARD FLIP SWITCHER (No smooth scroll)
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
        if (trackInput) trackInput.focus();
      }, 350);
    } else {
      cardFaceBack.style.position = 'absolute';
      cardFaceFront.style.position = 'relative';
      cardFlipper.classList.remove('is-flipped');
      tabBtnFile.classList.add('active');
      tabBtnTrack.classList.remove('active');
    }

    // Scroll to card if user was at the top hero
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
    resetSelect(assemblySelect, 'Select Assembly Constituency');
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

  // State Change:
  stateSelect.addEventListener('change', () => {
    const selectedState = stateSelect.value;

    resetSelect(districtSelect, 'Select District');
    districtCustom.style.display = 'none';
    districtCustom.value = '';

    resetSelect(lokSabhaSelect, 'Select Lok Sabha Constituency');
    lokSabhaCustom.style.display = 'none';
    lokSabhaCustom.value = '';

    resetSelect(assemblySelect, 'Select Assembly Constituency');
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

  // District Change:
  districtSelect.addEventListener('change', () => {
    const selectedState = stateSelect.value;
    const selectedDistrict = districtSelect.value;

    resetSelect(lokSabhaSelect, 'Select Lok Sabha Constituency');
    lokSabhaCustom.style.display = 'none';
    lokSabhaCustom.value = '';

    resetSelect(assemblySelect, 'Select Assembly Constituency');
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

      // Auto-select if only 1 Lok Sabha constituency exists for this district
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

  // Lok Sabha Change:
  lokSabhaSelect.addEventListener('change', () => {
    const selectedState = stateSelect.value;
    const selectedDistrict = districtSelect.value;
    const selectedLs = lokSabhaSelect.value;

    populateAssemblies(selectedState, selectedDistrict, selectedLs);
  });

  // Assembly Change:
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
  // 4. FORM VALIDATION & SUBMISSION
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

    const fullName = document.getElementById('fullName').value.trim();
    const mobile = document.getElementById('mobile').value.trim().replace(/\D/g, '');
    const email = document.getElementById('email').value.trim();
    const loc = getResolvedLocation();
    const grievanceNature = natureSelect.value.trim();
    const description = document.getElementById('description').value.trim();

    let isValid = true;

    // Validate Full Name
    if (!fullName) {
      setFieldError('grpFullName', 'errFullName', 'Full Name is mandatory.');
      isValid = false;
    } else if (fullName.length < 2) {
      setFieldError('grpFullName', 'errFullName', 'Name must be at least 2 characters.');
      isValid = false;
    }

    // Validate Mobile
    if (!mobile) {
      setFieldError('grpMobile', 'errMobile', 'Mobile number is mandatory.');
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

    // Validate Location Procedure
    if (!loc.state) {
      setFieldError('grpState', 'errState', 'Please select a State or UT.');
      isValid = false;
    }
    if (!loc.district) {
      setFieldError('grpDistrict', 'errDistrict', 'Please specify your District.');
      isValid = false;
    }
    if (!loc.lokSabha) {
      setFieldError('grpLokSabha', 'errLokSabha', 'Please specify your Lok Sabha Constituency.');
      isValid = false;
    }
    if (!loc.assembly) {
      setFieldError('grpAssembly', 'errAssembly', 'Please specify your Assembly Constituency.');
      isValid = false;
    }

    // Validate Grievance Nature
    if (!grievanceNature) {
      setFieldError('grpNature', 'errNature', 'Please select the Nature of Grievance.');
      isValid = false;
    }

    if (!isValid) return;

    // Submit payload
    const payload = {
      full_name: fullName,
      mobile: mobile,
      email: email || '',
      state: loc.state,
      district: loc.district,
      lok_sabha: loc.lokSabha,
      assembly: loc.assembly,
      grievance_nature: grievanceNature,
      description: description
    };

    submitBtn.disabled = true;
    submitSpinner.style.display = 'inline-block';
    if (submitBtnCaption) submitBtnCaption.textContent = 'Submitting to Central Database...';

    try {
      const response = await fetch('/api/grievances', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        modalTicketCode.textContent = resData.ticket_id;
        successModal.classList.add('active');

        // Reset form
        form.reset();
        resetSelect(districtSelect, 'Select District');
        resetSelect(lokSabhaSelect, 'Select Lok Sabha Constituency');
        resetSelect(assemblySelect, 'Select Assembly Constituency');
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
      if (submitBtnCaption) submitBtnCaption.textContent = 'Submit Complaint & Generate Ticket';
    }
  });

  // ==========================================
  // 5. MODAL INTERACTIONS
  // ==========================================
  modalDismissBtn.addEventListener('click', () => {
    successModal.classList.remove('active');
  });

  copyTicketBtn.addEventListener('click', () => {
    const code = modalTicketCode.textContent.trim();
    if (!code) return;

    navigator.clipboard.writeText(code).then(() => {
      copyBtnText.textContent = 'Copied! ✓';
      copyTicketBtn.style.color = '#15803d';
      setTimeout(() => {
        copyBtnText.textContent = 'Copy';
        copyTicketBtn.style.color = '';
      }, 2500);
    }).catch(() => {
      prompt('Copy your Ticket ID manually:', code);
    });
  });

  modalTrackNowBtn.addEventListener('click', () => {
    const code = modalTicketCode.textContent.trim();
    successModal.classList.remove('active');
    trackInput.value = code;
    flipCard('track');
    performTrackLookup(code);
  });

  successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
      successModal.classList.remove('active');
    }
  });

  // ==========================================
  // 6. TRACK COMPLAINT LOGIC
  // ==========================================
  async function performTrackLookup(ticketIdToQuery) {
    const ticketId = (ticketIdToQuery || trackInput.value).trim().toUpperCase();
    trackErrorMsg.textContent = '';
    trackCardResult.style.display = 'none';

    if (!ticketId) {
      trackErrorMsg.textContent = 'Please enter a valid Ticket ID (e.g. 2026NAME01).';
      trackInput.focus();
      return;
    }

    trackSubmitBtn.disabled = true;
    trackSpinner.style.display = 'inline-block';

    try {
      const response = await fetch(`/api/grievances/track/${encodeURIComponent(ticketId)}`);
      const data = await response.json();

      if (response.ok) {
        document.getElementById('resTicketId').textContent = data.ticket_id;
        document.getElementById('resName').textContent = data.full_name;
        document.getElementById('resMobile').textContent = data.mobile;
        document.getElementById('resNature').textContent = data.grievance_nature;
        document.getElementById('resDate').textContent = new Date(data.created_at).toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        // Set status pill
        const statusPill = document.getElementById('resStatusPill');
        statusPill.textContent = data.status;
        const normalizedStatus = data.status.toLowerCase().replace(/[^a-z0-9]/g, '-');
        statusPill.className = `status-pill ${normalizedStatus}`;

        // Set constituency trail
        document.getElementById('resState').textContent = data.state;
        document.getElementById('resDistrict').textContent = data.district;
        document.getElementById('resLokSabha').textContent = data.lok_sabha;
        document.getElementById('resAssembly').textContent = data.assembly;

        // Set remarks
        document.getElementById('resRemarks').textContent =
          data.admin_remarks || 'Your complaint is actively documented in the central register. Initial intake review is underway.';

        trackCardResult.style.display = 'block';
      } else {
        trackErrorMsg.textContent = data.error || `No record found for Ticket ID "${ticketId}".`;
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

  trackInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      performTrackLookup();
    }
  });

  // Initialize
  initDropdowns();
});
