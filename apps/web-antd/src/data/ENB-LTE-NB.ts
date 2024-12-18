export interface ConfigSchemaType {
  cell_default?: {
    [k: string]: unknown
    cell_barred?: boolean
    cipher_algo_pref?: number[]
    cqi_period?: number
    cyclic_prefix?: string
    dl_256qam?: boolean
    dpc?: boolean
    dpc_pucch_snr_target?: number
    dpc_pusch_snr_target?: number
    drb_config?: string
    edrx?: boolean
    inactivity_timer?: number
    initial_cqi?: number
    integ_algo_pref?: number[]
    intra_freq_reselection?: boolean
    mac_config?: {
      [k: string]: unknown
      dl_max_harq_tx?: number
      ul_max_harq_tx?: number
    }
    n_symb_cch?: number
    p_max?: number
    pdcch_format?: number
    pdsch_dedicated?: {
      [k: string]: unknown
      p_a?: number
      p_b?: number
    }
    phich_duration?: string
    phich_resource?: string
    plmn_list?: {
      [k: string]: unknown
      attach_without_pdn?: boolean
      cp_ciot_opt?: boolean
      plmn?: string
      reserved?: boolean
    }[]
    prach_config_index?: number
    prach_freq_offset?: number
    pucch_dedicated?: {
      [k: string]: unknown
      cqi_pucch_n_rb?: number
      n1_pucch_sr_count?: number
    }
    pusch_dedicated?: {
      [k: string]: unknown
      beta_offset_ack_index?: number
      beta_offset_cqi_index?: number
      beta_offset_ri_index?: number
    }
    pusch_hopping_offset?: number
    pusch_max_its?: number
    pusch_msg3_mcs?: number
    q_rx_lev_min?: number
    si_coderate?: number
    si_pdcch_format?: number
    si_value_tag?: number
    si_window_length?: number
    sib_sched_list?: {
      [k: string]: unknown
      filename?: string
      si_periodicity?: number
    }[]
    sr_period?: number
    srb_config?: {
      [k: string]: unknown
      id: number
      maxRetxThreshold: number
      t_PollRetransmit: number
      t_Reordering: number
    }[]
    srs_dedicated?: {
      [k: string]: unknown
      srs_bandwidth?: number
      srs_bandwidth_config?: number
      srs_hopping_bandwidth?: number
      srs_period?: number
      srs_subframe_config?: number
    }
    ul_64qam?: boolean
  }
  cell_list?: {
    [k: string]: unknown
    br_ue?: {
      [k: string]: unknown
      br_coverage_levels?: {
        [k: string]: unknown
        br_initial_cqi?: number
        br_mpdcch_al?: number
        br_mpdcch_css_n_rep?: number
        br_mpdcch_css_ra_al?: number
        br_mpdcch_n_rb?: number
        br_mpdcch_n_rep?: number
        br_mpdcch_n_rep_max?: number
        br_mpdcch_start_sf?: number
        br_mpdcch_tm_type?: string
        br_msg3_pusch_n_rep?: number
        br_pdsch_n_rep?: number
        br_pusch_msg3_mcs?: number
        br_pusch_n_rep?: number
        br_rar_coderate?: number
      }[]
      br_cqi_pucch_n_rb?: number
      br_mpdcch_paging_n_rep?: number
      br_mpdcch_ue_count?: number
      br_n1_pucch_sr_count?: number
      br_paging_mcs?: number
      br_paging_n_rep?: number
      br_prach_freq_offset?: number
      br_r_sib1?: number
      br_root_sequence_index?: number
      br_si_repetition_pattern?: number
      br_si_window_length?: number
      br_sib_sched_list?: {
        [k: string]: unknown
        filename?: string
        si_periodicity?: number
      }[]
      br_srs_enabled?: boolean
    }
    cell_id?: number
    cqi_period?: number
    dl_earfcn?: number
    n_antenna_dl?: number
    n_antenna_ul?: number
    n_id_cell?: number
    n_rb_dl?: number
    pucch_dedicated?: {
      [k: string]: unknown
      cqi_pucch_n_rb?: number
    }
    pusch_msg3_mcs?: number
    rf_port?: number
    root_sequence_index?: number
    sr_period?: number
    srs_dedicated?: {
      [k: string]: unknown
      srs_period?: number
    }
    tac?: number
  }[]
  com_addr?: string
  enb_id?: number
  gtp_addr?: string
  log_filename?: string
  log_options?: string
  mme_list?: {
    [k: string]: unknown
    mme_addr?: string
  }[]
  nb_cell_default?: {
    [k: string]: unknown
    cell_barred?: boolean
    cipher_algo_pref?: number[]
    coverage_levels?: {
      [k: string]: unknown
      msg3_n_rep?: number
      msg3_n_sc?: number
      msg3_single_tone_mcs?: number
      npdcch_paging_n_rep?: number
      npdcch_ra_n_rep?: number
      npdcch_uss_n_rep?: number
      npdcch_uss_n_rep_max?: number
      npdcch_uss_offset?: number
      npdcch_uss_start_sf?: number
      npdsch_i_tbs?: number
      npdsch_n_rep?: number
      npdsch_paging_i_tbs?: number
      npdsch_paging_n_rep?: number
      npdsch_ra_i_tbs?: number
      npdsch_ra_n_rep?: number
      nprach_detect_threshold?: number
      npusch_multi_tone_i_tbs?: number
      npusch_n_rep?: number
      npusch_n_sc?: number
      npusch_single_tone_i_tbs?: number
      ul_sc_spacing?: number
    }[]
    drb_config?: string
    inactivity_timer?: number
    integ_algo_pref?: number[]
    intra_freq_reselection?: boolean
    mac_config?: {
      [k: string]: unknown
      dl_max_consecutive_retx?: number
      dl_max_harq_tx?: number
      logical_channel_sr_prohibit_timer?: number
      msg3_max_harq_tx?: number
      periodic_bsr_timer?: number
      retx_bsr_timer?: number
      time_alignment_timer_dedicated?: number
      ul_max_consecutive_retx?: number
      ul_max_harq_tx?: number
    }
    npusch_max_its?: number
    p_max?: number
    plmn_list?: {
      [k: string]: unknown
      attach_without_pdn?: boolean
      plmn?: string
      reserved?: boolean
    }[]
    q_qual_min?: number
    q_rx_lev_min?: number
    r_sib1?: number
    si_radio_frame_offset?: number
    si_value_tag?: number
    si_value_tag_list_enable?: boolean
    si_window_length?: number
    sib_sched_list?: {
      [k: string]: unknown
      filename?: string
      si_periodicity?: number
      si_repetition_pattern?: number
      si_value_tag?: number
    }[]
    srb_config?: {
      [k: string]: unknown
      enb_maxRetxThreshold?: number
      enb_t_PollRetransmit?: number
      maxRetxThreshold?: number
      t_PollRetransmit?: number
    }
  }
  nb_cell_list?: {
    [k: string]: unknown
    cell_id?: number
    dl_earfcn?: number
    n_antenna_dl?: number
    n_antenna_ul?: number
    n_id_ncell?: number
    operation_mode?: string
    rel13_5?: boolean
    rf_port?: number
    tac?: number
  }[]
  rf_driver?: {
    [k: string]: unknown
    args?: string
    name?: string
    rx_antenna?: string
    sync?: string
  }
  rx_gain?: number
  tx_gain?: number
  [k: string]: unknown
}
