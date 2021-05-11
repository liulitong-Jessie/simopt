Search.setIndex({docnames:["base","data_farming_base","directory","index","instructions","modules","oracles","problems","rng","solvers","sscont","wrapper_base"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["base.rst","data_farming_base.rst","directory.rst","index.rst","instructions.rst","modules.rst","oracles.rst","problems.rst","rng.rst","solvers.rst","sscont.rst","wrapper_base.rst"],objects:{"":{base:[0,0,0,"-"],data_farming_base:[1,0,0,"-"],directory:[2,0,0,"-"],oracles:[6,0,0,"-"],problems:[7,0,0,"-"],rng:[8,0,0,"-"],solvers:[9,0,0,"-"],wrapper_base:[11,0,0,"-"]},"base.Oracle":{check_factor_datatype:[0,2,1,""],check_factor_list:[0,3,1,""],check_simulatable_factor:[0,2,1,""],check_simulatable_factors:[0,2,1,""],factors:[0,3,1,""],n_responses:[0,3,1,""],n_rngs:[0,3,1,""],name:[0,3,1,""],replicate:[0,2,1,""],specifications:[0,3,1,""]},"base.Problem":{attach_rngs:[0,2,1,""],budget:[0,3,1,""],check_deterministic_constraints:[0,2,1,""],constraint_type:[0,3,1,""],deterministic_objectives_and_gradients:[0,2,1,""],deterministic_stochastic_constraints_and_gradients:[0,2,1,""],dim:[0,3,1,""],factor_dict_to_vector:[0,2,1,""],get_random_solution:[0,2,1,""],gradient_available:[0,3,1,""],initial_solution:[0,3,1,""],minmax:[0,3,1,""],n_objectives:[0,3,1,""],n_stochastic_constraints:[0,3,1,""],name:[0,3,1,""],optimal_bound:[0,3,1,""],optimal_solution:[0,3,1,""],oracle:[0,3,1,""],oracle_default_factors:[0,3,1,""],oracle_fixed_factors:[0,3,1,""],ref_optimal_solution:[0,3,1,""],response_dict_to_objectives:[0,2,1,""],response_dict_to_stoch_constraints:[0,2,1,""],rng_list:[0,3,1,""],simulate:[0,2,1,""],variable_type:[0,3,1,""],vector_to_factor_dict:[0,2,1,""]},"base.Solution":{attach_rngs:[0,2,1,""],decision_factors:[0,3,1,""],det_objectives:[0,3,1,""],det_objectives_gradients:[0,3,1,""],det_stoch_constraints:[0,3,1,""],det_stoch_constraints_gradients:[0,3,1,""],dim:[0,3,1,""],n_reps:[0,3,1,""],objectives:[0,3,1,""],objectives_gradients:[0,3,1,""],pad_storage:[0,2,1,""],recompute_summary_statistics:[0,2,1,""],rng_list:[0,3,1,""],stochastic_constraints:[0,3,1,""],stochastic_constraints_gradients:[0,3,1,""],storage_size:[0,3,1,""],x:[0,3,1,""]},"base.Solver":{attach_rngs:[0,2,1,""],check_factor_datatype:[0,2,1,""],check_solver_factor:[0,2,1,""],check_solver_factors:[0,2,1,""],constraint_type:[0,3,1,""],factors:[0,3,1,""],gradient_needed:[0,3,1,""],name:[0,3,1,""],objective_type:[0,3,1,""],prepare_sim_new_soln:[0,2,1,""],rng_list:[0,3,1,""],solution_progenitor_rngs:[0,3,1,""],solve:[0,2,1,""],specifications:[0,3,1,""],variable_type:[0,3,1,""]},"data_farming_base.DataFarmingExperiment":{design:[1,3,1,""],n_design_pts:[1,3,1,""],oracle:[1,3,1,""],print_to_csv:[1,2,1,""],run:[1,2,1,""]},"data_farming_base.DataFarmingMetaExperiment":{calculate_statistics:[1,2,1,""],design:[1,3,1,""],n_design_pts:[1,3,1,""],post_replicate:[1,2,1,""],print_to_csv:[1,2,1,""],run:[1,2,1,""]},"data_farming_base.DesignPoint":{attach_rngs:[1,2,1,""],gradients:[1,3,1,""],n_reps:[1,3,1,""],oracle:[1,3,1,""],oracle_factors:[1,3,1,""],responses:[1,3,1,""],rng_list:[1,3,1,""],simulate:[1,2,1,""]},"oracles.cntnv":{CntNV:[6,1,1,""]},"oracles.cntnv.CntNV":{check_Burr_c:[6,2,1,""],check_Burr_k:[6,2,1,""],check_factor_list:[6,3,1,""],check_order_quantity:[6,2,1,""],check_purchase_price:[6,2,1,""],check_sales_price:[6,2,1,""],check_salvage_price:[6,2,1,""],check_simulatable_factors:[6,2,1,""],factors:[6,3,1,""],n_responses:[6,3,1,""],n_rngs:[6,3,1,""],name:[6,3,1,""],replicate:[6,2,1,""],specifications:[6,3,1,""]},"oracles.facilitysizing":{FacilitySize:[6,1,1,""]},"oracles.facilitysizing.FacilitySize":{check_capacity:[6,2,1,""],check_cov:[6,2,1,""],check_factor_list:[6,3,1,""],check_mean_vec:[6,2,1,""],check_n_fac:[6,2,1,""],check_simulatable_factors:[6,2,1,""],factors:[6,3,1,""],n_responses:[6,3,1,""],n_rngs:[6,3,1,""],name:[6,3,1,""],replicate:[6,2,1,""],specifications:[6,3,1,""]},"oracles.mm1queue":{MM1Queue:[6,1,1,""]},"oracles.mm1queue.MM1Queue":{check_factor_list:[6,3,1,""],check_lambda:[6,2,1,""],check_mu:[6,2,1,""],check_people:[6,2,1,""],check_simulatable_factors:[6,2,1,""],check_warmup:[6,2,1,""],factors:[6,3,1,""],n_responses:[6,3,1,""],n_rngs:[6,3,1,""],name:[6,3,1,""],replicate:[6,2,1,""],specifications:[6,3,1,""]},"oracles.rmitd":{RMITD:[6,1,1,""]},"oracles.rmitd.RMITD":{check_cost:[6,2,1,""],check_demand_means:[6,2,1,""],check_factor_list:[6,3,1,""],check_gamma_scale:[6,2,1,""],check_gamma_shape:[6,2,1,""],check_initial_inventory:[6,2,1,""],check_prices:[6,2,1,""],check_reservation_qtys:[6,2,1,""],check_simulatable_factors:[6,2,1,""],check_time_horizon:[6,2,1,""],factors:[6,3,1,""],n_responses:[6,3,1,""],n_rngs:[6,3,1,""],name:[6,3,1,""],replicate:[6,2,1,""],specifications:[6,3,1,""]},"oracles.sscont":{SSCont:[6,1,1,""]},"oracles.sscont.SSCont":{check_S:[6,2,1,""],check_demand_mean:[6,2,1,""],check_factor_list:[6,3,1,""],check_fixed_cost:[6,2,1,""],check_holding_cost:[6,2,1,""],check_lead_mean:[6,2,1,""],check_n_days:[6,2,1,""],check_s:[6,2,1,""],check_simulatable_factors:[6,2,1,""],check_variable_cost:[6,2,1,""],check_warmup:[6,2,1,""],factors:[6,3,1,""],n_responses:[6,3,1,""],n_rngs:[6,3,1,""],name:[6,3,1,""],replicate:[6,2,1,""],specifications:[6,3,1,""]},"problems.cntnv_max_profit":{CntNVMaxProfit:[7,1,1,""]},"problems.cntnv_max_profit.CntNVMaxProfit":{budget:[7,3,1,""],check_deterministic_constraints:[7,2,1,""],constraint_type:[7,3,1,""],deterministic_objectives_and_gradients:[7,2,1,""],deterministic_stochastic_constraints_and_gradients:[7,2,1,""],dim:[7,3,1,""],factor_dict_to_vector:[7,2,1,""],factors:[7,3,1,""],get_random_solution:[7,2,1,""],gradient_available:[7,3,1,""],initial_solution:[7,3,1,""],minmax:[7,3,1,""],n_objectives:[7,3,1,""],n_stochastic_constraints:[7,3,1,""],name:[7,3,1,""],optimal_bound:[7,3,1,""],optimal_solution:[7,3,1,""],oracle:[7,3,1,""],oracle_default_factors:[7,3,1,""],oracle_fixed_factors:[7,3,1,""],ref_optimal_solution:[7,3,1,""],response_dict_to_objectives:[7,2,1,""],response_dict_to_stoch_constraints:[7,2,1,""],rng_list:[7,3,1,""],variable_type:[7,3,1,""],vector_to_factor_dict:[7,2,1,""]},"problems.facilitysizing_totalcost":{FacilitySizingTotalCost:[7,1,1,""]},"problems.facilitysizing_totalcost.FacilitySizingTotalCost":{budget:[7,3,1,""],check_deterministic_constraints:[7,2,1,""],constraint_type:[7,3,1,""],deterministic_objectives_and_gradients:[7,2,1,""],deterministic_stochastic_constraints_and_gradients:[7,2,1,""],dim:[7,3,1,""],factor_dict_to_vector:[7,2,1,""],factors:[7,3,1,""],get_random_solution:[7,2,1,""],gradient_available:[7,3,1,""],initial_solution:[7,3,1,""],minmax:[7,3,1,""],n_objectives:[7,3,1,""],n_stochastic_constraints:[7,3,1,""],name:[7,3,1,""],optimal_bound:[7,3,1,""],optimal_solution:[7,3,1,""],oracle:[7,3,1,""],oracle_default_factors:[7,3,1,""],oracle_fixed_factors:[7,3,1,""],ref_optimal_solution:[7,3,1,""],response_dict_to_objectives:[7,2,1,""],response_dict_to_stoch_constraints:[7,2,1,""],rng_list:[7,3,1,""],variable_type:[7,3,1,""],vector_to_factor_dict:[7,2,1,""]},"problems.mm1_min_mean_sojourn_time":{MM1MinMeanSojournTime:[7,1,1,""]},"problems.mm1_min_mean_sojourn_time.MM1MinMeanSojournTime":{budget:[7,3,1,""],check_deterministic_constraints:[7,2,1,""],constraint_type:[7,3,1,""],deterministic_objectives_and_gradients:[7,2,1,""],deterministic_stochastic_constraints_and_gradients:[7,2,1,""],dim:[7,3,1,""],factor_dict_to_vector:[7,2,1,""],factors:[7,3,1,""],get_random_solution:[7,2,1,""],gradient_available:[7,3,1,""],initial_solution:[7,3,1,""],minmax:[7,3,1,""],n_objectives:[7,3,1,""],n_stochastic_constraints:[7,3,1,""],name:[7,3,1,""],optimal_bound:[7,3,1,""],optimal_solution:[7,3,1,""],oracle:[7,3,1,""],oracle_default_factors:[7,3,1,""],oracle_fixed_factors:[7,3,1,""],ref_optimal_solution:[7,3,1,""],response_dict_to_objectives:[7,2,1,""],response_dict_to_stoch_constraints:[7,2,1,""],rng_list:[7,3,1,""],variable_type:[7,3,1,""],vector_to_factor_dict:[7,2,1,""]},"problems.rmitd_maxrevenue":{RMITDMaxRevenue:[7,1,1,""]},"problems.rmitd_maxrevenue.RMITDMaxRevenue":{budget:[7,3,1,""],check_deterministic_constraints:[7,2,1,""],constraint_type:[7,3,1,""],dim:[7,3,1,""],factor_dict_to_vector:[7,2,1,""],factors:[7,3,1,""],get_random_solution:[7,2,1,""],gradient_available:[7,3,1,""],initial_solution:[7,3,1,""],minmax:[7,3,1,""],n_objectives:[7,3,1,""],n_stochastic_constraints:[7,3,1,""],name:[7,3,1,""],optimal_bound:[7,3,1,""],optimal_solution:[7,3,1,""],oracle:[7,3,1,""],ref_optimal_solution:[7,3,1,""],response_dict_to_objectives:[7,2,1,""],rng_list:[7,3,1,""],variable_type:[7,3,1,""],vector_to_factor_dict:[7,2,1,""]},"problems.sscont_min_cost":{SSContMinCost:[7,1,1,""]},"problems.sscont_min_cost.SSContMinCost":{budget:[7,3,1,""],check_deterministic_constraints:[7,2,1,""],constraint_type:[7,3,1,""],deterministic_objectives_and_gradients:[7,2,1,""],deterministic_stochastic_constraints_and_gradients:[7,2,1,""],dim:[7,3,1,""],factor_dict_to_vector:[7,2,1,""],factors:[7,3,1,""],get_random_solution:[7,2,1,""],gradient_available:[7,3,1,""],initial_solution:[7,3,1,""],minmax:[7,3,1,""],n_objectives:[7,3,1,""],n_stochastic_constraints:[7,3,1,""],name:[7,3,1,""],optimal_bound:[7,3,1,""],optimal_solution:[7,3,1,""],oracle:[7,3,1,""],oracle_default_factors:[7,3,1,""],oracle_fixed_factors:[7,3,1,""],ref_optimal_solution:[7,3,1,""],response_dict_to_objectives:[7,2,1,""],response_dict_to_stoch_constraints:[7,2,1,""],rng_list:[7,3,1,""],variable_type:[7,3,1,""],vector_to_factor_dict:[7,2,1,""]},"rng.matmodops":{mat31_mod:[8,4,1,""],mat33_mat31_mult:[8,4,1,""],mat33_mat33_mod:[8,4,1,""],mat33_mat33_mult:[8,4,1,""],mat33_mod:[8,4,1,""],mat33_power_mod:[8,4,1,""]},"rng.mrg32k3a":{MRG32k3a:[8,1,1,""],bsm:[8,4,1,""],mrg32k3a:[8,4,1,""]},"rng.mrg32k3a.MRG32k3a":{_current_state:[8,3,1,""],advance_stream:[8,2,1,""],advance_substream:[8,2,1,""],advance_subsubstream:[8,2,1,""],get_current_state:[8,2,1,""],getstate:[8,2,1,""],mvnormalvariate:[8,2,1,""],normalvariate:[8,2,1,""],poissonvariate:[8,2,1,""],random:[8,2,1,""],ref_seed:[8,3,1,""],reset_stream:[8,2,1,""],reset_substream:[8,2,1,""],reset_subsubstream:[8,2,1,""],s_ss_sss_index:[8,3,1,""],seed:[8,2,1,""],setstate:[8,2,1,""],start_fixed_s_ss_sss:[8,2,1,""],stream_start:[8,3,1,""],substream_start:[8,3,1,""],subsubstream_start:[8,3,1,""]},"solvers.randomsearch":{RandomSearch:[9,1,1,""]},"solvers.randomsearch.RandomSearch":{check_sample_size:[9,2,1,""],check_solver_factors:[9,2,1,""],constraint_type:[9,3,1,""],factors:[9,3,1,""],gradient_needed:[9,3,1,""],name:[9,3,1,""],objective_type:[9,3,1,""],rng_list:[9,3,1,""],solve:[9,2,1,""],specifications:[9,3,1,""],variable_type:[9,3,1,""]},"solvers.simannealing":{SANE:[9,1,1,""]},"solvers.simannealing.SANE":{check_cooling_coeff:[9,2,1,""],check_init_temp:[9,2,1,""],check_sampling_variance:[9,2,1,""],check_solver_factors:[9,2,1,""],constraint_type:[9,3,1,""],factors:[9,3,1,""],gradient_needed:[9,3,1,""],name:[9,3,1,""],objective_type:[9,3,1,""],rng_list:[9,3,1,""],solve:[9,2,1,""],specifications:[9,3,1,""],variable_type:[9,3,1,""]},"wrapper_base.Experiment":{all_est_objective:[11,3,1,""],all_intermediate_budgets:[11,3,1,""],all_post_replicates:[11,3,1,""],all_prog_curves:[11,3,1,""],all_recommended_xs:[11,3,1,""],all_reevaluated_solns:[11,3,1,""],area_mean:[11,3,1,""],area_mean_CI:[11,3,1,""],area_std_dev:[11,3,1,""],area_std_dev_CI:[11,3,1,""],areas:[11,3,1,""],bootstrap_CI:[11,2,1,""],bootstrap_sample:[11,2,1,""],clear_postreps:[11,2,1,""],clear_runs:[11,2,1,""],clear_stats:[11,2,1,""],compute_area_stats:[11,2,1,""],compute_solvability:[11,2,1,""],compute_solvability_quantiles:[11,2,1,""],crn_across_budget:[11,3,1,""],crn_across_macroreps:[11,3,1,""],crn_across_solns:[11,3,1,""],initial_soln:[11,3,1,""],n_macroreps:[11,3,1,""],n_postreps:[11,3,1,""],n_postreps_init_opt:[11,3,1,""],plot_bootstrap_CIs:[11,2,1,""],plot_progress_curves:[11,2,1,""],plot_solvability_curves:[11,2,1,""],post_replicate:[11,2,1,""],problem:[11,3,1,""],ref_opt_soln:[11,3,1,""],run:[11,2,1,""],solve_time_quantiles:[11,3,1,""],solve_time_quantiles_CIs:[11,3,1,""],solve_tols:[11,3,1,""],solver:[11,3,1,""]},"wrapper_base.MetaExperiment":{all_oracle_fixed_factors:[11,3,1,""],all_problem_fixed_factors:[11,3,1,""],all_solver_fixed_factors:[11,3,1,""],experiments:[11,3,1,""],n_problems:[11,3,1,""],n_solvers:[11,3,1,""],plot_area_scatterplot:[11,2,1,""],plot_solvability_profiles:[11,2,1,""],post_replicate:[11,2,1,""],problem_names:[11,3,1,""],run:[11,2,1,""],solver_names:[11,3,1,""]},base:{Oracle:[0,1,1,""],Problem:[0,1,1,""],Solution:[0,1,1,""],Solver:[0,1,1,""]},data_farming_base:{DataFarmingExperiment:[1,1,1,""],DataFarmingMetaExperiment:[1,1,1,""],DesignPoint:[1,1,1,""],record_df_experiment_results:[1,4,1,""]},oracles:{cntnv:[6,0,0,"-"],facilitysizing:[6,0,0,"-"],mm1queue:[6,0,0,"-"],rmitd:[6,0,0,"-"],sscont:[6,0,0,"-"]},problems:{cntnv_max_profit:[7,0,0,"-"],facilitysizing_totalcost:[7,0,0,"-"],mm1_min_mean_sojourn_time:[7,0,0,"-"],rmitd_maxrevenue:[7,0,0,"-"],sscont_min_cost:[7,0,0,"-"]},rng:{matmodops:[8,0,0,"-"],mrg32k3a:[8,0,0,"-"]},solvers:{randomsearch:[9,0,0,"-"],simannealing:[9,0,0,"-"]},wrapper_base:{Experiment:[11,1,1,""],MetaExperiment:[11,1,1,""],area_under_prog_curve:[11,4,1,""],read_experiment_results:[11,4,1,""],record_experiment_results:[11,4,1,""],save_plot:[11,4,1,""],solve_time_of_prog_curve:[11,4,1,""],stylize_area_plot:[11,4,1,""],stylize_plot:[11,4,1,""],stylize_solvability_plot:[11,4,1,""],trim_solver_results:[11,4,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"0038":3,"0046":3,"0094":3,"0200":3,"0400287":3,"0800688":3,"100":[10,11],"1000":10,"1200315":3,"12345":8,"1247696":3,"1254298":3,"141":8,"1500":10,"1536895":3,"1537394":3,"1650441":3,"1839346":3,"1990":8,"2000":10,"2006":3,"2008":[9,10],"2011":3,"2017":3,"2019":3,"3x1":8,"3x3":8,"627":9,"654":9,"700":10,"\u03b4":[],"boolean":[1,11],"case":[0,6],"class":[0,1,6,7,8,9,11],"default":[0,1,6,7,9],"float":[0,1,7,8,11],"function":[0,3,7,9,11],"int":[0,1,6,7,8,9,11],"new":[0,7,8,11],"return":[0,6,7,8,9,11],"switch":[0,6],"true":[0,1,8,11],CIs:11,DMS:3,For:[1,3,11],IIS:3,LHS:0,The:3,Use:8,Useful:8,_current_st:8,account:6,across:[0,1],adapt:10,add:11,added:0,advanc:8,advance_stream:8,advance_substream:8,advance_subsubstream:8,after:[6,11],aggreg:[3,11],air:3,algorithm:[3,8],all:[6,10,11],all_est_object:11,all_in_on:11,all_intermediate_budget:11,all_oracle_fixed_factor:11,all_post_repl:11,all_problem_fixed_factor:11,all_prog_curv:11,all_recommended_x:11,all_reevaluated_soln:11,all_solver_fixed_factor:11,almost:10,alpha:[1,11],alreadi:8,also:3,amount:6,analyz:3,ani:[3,11],anneal:9,appear:1,append:[0,1],approach:10,approxim:8,architectur:3,area:[1,11],area_mean:11,area_mean_ci:11,area_std_dev:11,area_std_dev_ci:11,area_under_prog_curv:11,armi:3,arrai:[0,8,11],arriv:10,articl:10,associ:[0,1,7,11],asymptot:3,attach:[0,1],attach_rng:[0,1],author:3,avail:[0,7],averag:[6,11],avg_holding_cost:6,avg_ord:6,avg_order_cost:6,avg_sojourn_tim:6,avg_stockout:6,avg_waiting_tim:6,axes:11,back:10,backlog:10,backord:[6,10],base:[1,3,5,6,7,8,9,11],baselin:0,beaslei:8,been:[3,11],begin:10,being:0,below:[10,11],beta:[1,11],between:8,bia:11,bias_correct:11,binari:6,bool:[0,1,6,7,8,9,11],bootstrap:11,bootstrap_ci:11,bootstrap_est_object:11,bootstrap_prog_curv:11,bootstrap_rng:11,bootstrap_sampl:11,bound:[0,7,11],box:[0,7,9],brank:9,bs_ci_lower_bound:11,bs_ci_upper_bound:11,bsm:8,budget:[0,7,9,11],build:3,burr:6,calcul:[1,8,10],calculate_statist:1,can:[0,3,6,9,11],cannot:6,capac:7,center:10,chanc:7,chang:[0,3,9],changeabl:[0,6,7,9],charg:10,check:[0,6,7],check_:6,check_burr_c:6,check_burr_k:6,check_capac:6,check_cooling_coeff:9,check_cost:6,check_cov:6,check_demand_mean:6,check_deterministic_constraint:[0,7],check_factor_datatyp:0,check_factor_list:[0,6],check_fixed_cost:6,check_gamma_scal:6,check_gamma_shap:6,check_holding_cost:6,check_init_temp:9,check_initial_inventori:6,check_lambda:6,check_lead_mean:6,check_mean_vec:6,check_mu:6,check_n_dai:6,check_n_fac:6,check_order_quant:6,check_peopl:6,check_pric:6,check_purchase_pric:6,check_reservation_qti:6,check_sales_pric:6,check_salvage_pric:6,check_sample_s:9,check_sampling_vari:9,check_simulatable_factor:[0,6],check_solver_factor:[0,9],check_time_horizon:6,check_variable_cost:6,check_warmup:6,chol:8,christian:9,clarifi:10,clear_postrep:11,clear_run:11,clear_stat:11,cmmi:3,cntnv:[3,5],cntnv_max_profit:[3,5],cntnvmaxprofit:7,combin:[0,7],come:4,compar:3,comparison:3,complex:3,compon:[0,7],comput:[0,1,3,7,8,11],compute_area_stat:11,compute_ci:11,compute_solv:11,compute_solvability_quantil:11,conclus:3,conduct:3,conf_level:11,confer:3,confid:11,conquer:8,consid:10,consist:1,constrain:10,constraint:[0,7,9],constraint_typ:[0,7,9],construct:[3,11],contain:[1,3,11],content:5,continu:[0,6,7,9],contribut:3,control:3,converg:11,convert:[0,7],copi:[0,1],correct:11,correspond:[0,8],cost:[6,7,10],cov:8,covari:8,creat:11,crn:[0,1,9,11],crn_across_budget:[1,11],crn_across_design_pt:1,crn_across_macrorep:[1,11],crn_across_soln:[0,1,9,11],csv:1,csv_filenam:1,current:[0,1,6,8],curv:[1,11],custom:6,d_t:10,dai:[6,10],data:[0,1,6,9,11],data_farming_bas:[3,5],datafarmingexperi:1,datafarmingmetaexperi:1,decis:[0,7],decision_factor:0,defin:[3,11],definin:[1,11],delet:11,delta:10,demand:[6,10],depend:[0,6,7],describ:[0,3,8],descript:[0,7,9],design:[1,3],design_filenam:1,designpoint:1,desir:8,det_object:[0,7],det_objectives_gradi:[0,7],det_stoch_constraint:[0,7],det_stoch_constraints_gradi:[0,7],detail:[0,3,6,9],determin:[0,6,9],determinist:[0,7,9],deterministic_objectives_and_gradi:[0,7],deterministic_stochastic_constraints_and_gradi:[0,7],dev:11,develop:3,deviat:[8,11],dge:3,dict:[0,1,6,7,9,11],dictionari:[0,1,2,7,11],did:6,differ:[0,1,3,9,11],digit:1,dim:[0,7],dimens:0,directori:[3,5],discret:[0,7,9],discuss:10,distribut:[3,6,8,10],divid:8,dmi:3,dong:3,downstream:11,drawn:3,drop:11,dure:10,each:[0,1,3,6,7,9,10,11],earlier:3,eckman:3,econom:10,ecuy:8,either:11,encourag:3,end:10,environ:9,estim:[0,1,3,6,11],eval:[0,7],evalaut:0,evalu:[3,11],event:10,exampl:10,exceed:6,exist:3,expect:[7,8],experi:[1,11],experiment:3,explain:3,expon:8,exponenti:[6,10],express:3,extra:11,extract:1,fa9550:3,facil:[6,7],facilitys:[3,5],facilitysizing_totalcost:[3,5],facilitysizingtotalcost:7,factor:[0,1,6,7,8,9,11],factor_dict:[0,7],factor_dict_to_vector:[0,7],factor_head:1,factor_nam:0,factor_settings_filenam:1,fals:[1,8,11],farm:1,fashion:3,feasibl:9,featur:0,figur:11,file:[1,11],file_nam:[1,11],find:[3,10],finit:3,first:11,fix:[1,6,9,10,11],fixed_factor:[0,6,9],fixed_factors_filenam:11,follow:3,forc:3,form:[1,11],found:3,foundat:3,frac_cust_wait:6,frac_inter_budget:11,fraction:[6,10,11],from:[0,1,3,7,8,9,10,11],full:10,further:10,furthermor:10,gap:[1,11],gener:[0,1,3,6,7,8,11],get:10,get_current_st:8,get_random_solut:[0,7],getstat:8,github:3,give:3,given:[0,6,8],goal:10,gradient:[0,1,6,7,9],gradient_avail:[0,7],gradient_need:[0,9],grant:3,gui:[0,6,9],half:11,halfwidth:11,hand:[0,6,7,10],handl:9,has:[3,11],have:[8,10],help:3,helper:11,henderson:3,here:3,heurist:9,hold:[6,10],how:3,implement:[0,3,7,8],index:[3,11],indic:[0,1,6,7,8,9,11],initi:[0,1,7,10,11],initial_soln:11,initial_solut:[0,7],inner:11,instal:7,instanc:[0,7],instruct:3,intend:3,inter:[6,7],interarriv:6,interest:[0,3,6],interfac:3,intermedi:[0,9,11],intermediate_budget:[0,9,11],intern:[0,8,9],interv:11,inventori:[6,7],inverv:11,ip_t:10,is_permiss:0,is_right_typ:0,is_simulat:[0,6,9],its:0,joint:[0,9],journal:9,jurgen:9,kei:[0,7,11],kleijnen:10,known:[0,3,7],label:11,lambda:6,latest:3,lead:[6,10],least:6,left:[0,7],length:[8,11],level:[0,7,11],lhss:[0,7],librari:3,lieu:[0,7],list:[1,3,5,6,7,9],literatur:3,lmbda:8,locat:8,logic:3,lookup:0,lower:11,lower_bound:11,macrorepl:[0,1,9,11],made:6,manag:[6,7],mat31_mod:8,mat33_mat31_mult:8,mat33_mat33_mod:8,mat33_mat33_mult:8,mat33_mod:8,mat33_power_mod:8,match:0,materi:3,math:[],mathbb:10,matlab:3,matmodop:[3,5],matrix:[1,8],max:[0,7,10,11],max_halfwidth:11,maxim:[0,7],maximum:11,mean:[6,7,10,11],mean_vec:8,measur:[0,3,6,10,11],meisel:9,met:6,meta:[1,11],meta_raw_result:1,metaexperi:11,method:[8,11],minim:[0,7,10],minmax:[0,7],mix:[0,7,9],mm1_min_mean_sojourn_tim:[3,5],mm1minmeansojourntim:7,mm1queue:[3,5],model:[0,3,6,10],modul:[3,5],moduli:8,modulu:8,more:11,moro:8,most:10,motiv:3,mrg323k3a:8,mrg32k3a:[0,1,3,5,6,7,9,11],multi:[0,6,7,9],multipl:[3,6,10,11],multipli:8,multivari:8,mvnormalvari:8,n_bootstrap:11,n_cut:6,n_design_pt:1,n_fac_stockout:6,n_macrorep:[1,11],n_object:[0,7],n_postrep:[1,11],n_postreps_init_opt:[1,11],n_problem:11,n_rep:[0,1],n_respons:[0,6],n_rng:[0,6],n_solver:11,n_stochastic_constraint:[0,7],name:[0,1,6,7,9,11],nation:3,necessarili:3,need:[0,8,9,10],nest:6,new_stat:8,newsvendor:[6,7],next:[0,8],nois:9,noisi:9,non:[1,7],none:[1,8,11],normal:[6,8,11],normalvari:8,nos:3,note:10,novel:10,nowrap:[],nsf:3,number:[0,1,3,6,7,8,9,11],numpi:[0,11],o_t:10,object:[0,1,3,6,7,8,9,11],objective_typ:[0,9],objectives_gradi:0,observ:[1,3],occur:6,offic:3,often:3,on_time_r:6,one:[3,6,11],oper:8,opinion:3,optim:[0,1,3,7,9,10,11],optimal_bound:[0,7],optimal_solut:[0,7],option:[8,11],oracl:[0,1,2,3,5,7,11],oracle_default_factor:[0,7],oracle_directori:2,oracle_factor:[1,7],oracle_fixed_factor:[0,1,7,11],oracle_nam:1,order:[1,6,10],order_r:6,origin:3,our:10,outer:11,output:[1,8,11],outstand:10,overrid:[0,7],overriden:[0,7],packag:[3,5],pad_storag:0,page:3,pair:[1,11],paper:[3,10],paramet:[0,1,6,7,8,9,10,11],particularli:3,pass:7,pasupathi:3,per:[6,10],percentil:11,perform:[0,3,6,11],period:[6,10],permiss:[0,9],pickl:[1,11],place:10,plot:11,plot_area_scatterplot:11,plot_bootstrap_ci:11,plot_ci:11,plot_progress_curv:11,plot_solvability_curv:11,plot_solvability_profil:11,plot_typ:11,plu:11,point:1,poisson:[6,8,10],poissonvari:8,posit:10,post:[1,11],post_repl:[1,11],postrepl:[1,11],power:8,prepare_sim_new_soln:0,presenc:9,prime:0,print:1,print_to_csv:1,probabl:[3,6,7,8],problem:[0,1,2,3,5,6,9,11],problem_directori:2,problem_fixed_factor:[1,11],problem_nam:[1,11],process:11,produc:11,product:[6,8],profil:11,profit:[6,7],prog_curv:11,progenitor:0,progress:[1,11],provid:[0,2,3,8,10,11],pseudo:8,publish:1,pull:3,purpos:[0,3,9],quantil:[1,8,11],queue:[6,7],rand_sol_rng:[0,7],random:[0,1,3,6,7,8,11],randomli:[3,9],randomsearch:[3,5],rang:1,rate:[6,10],rather:3,raw_result:1,read:11,read_experiment_result:11,realiz:3,receiv:10,recent:3,recommend:[0,1,3,9,10,11],recommended_soln:[0,9,11],recommended_solut:11,recomput:0,recompute_summary_statist:0,record:0,record_df_experiment_result:1,record_experiment_result:11,reevalu:11,ref_opt_soln:11,ref_optimal_solut:[0,7],ref_se:8,refer:[0,7,11],referenc:8,reflect:3,reformat:11,region:9,rel:[1,3,11],relat:3,replenish:10,replic:[0,1,3,6,7,9,11],report:11,repres:[0,1],request:3,res:8,resampl:11,research:[3,10],reset:8,reset_stream:8,reset_substream:8,reset_subsubstream:8,respons:[0,1,3,6,7],response_dict:[0,7],response_dict_to_object:[0,7],response_dict_to_stoch_constraint:[0,7],restart:[0,7],result:[1,3,11],revenu:[6,7],rmitd:[3,5],rmitd_maxrevenu:[3,5],rmitdmaxrevenu:7,rng:[0,1,3,5,6,7,9],rng_list:[0,1,6,7,9],run:[0,1,3,6,9,11],s_ss_sss_index:8,s_ss_sss_triplet:8,sale:6,salvag:6,sampl:[0,7,9,11],sane:9,satisfi:[0,6,7],save:[1,11],save_plot:11,scatter:11,scatterplot:11,scenario:6,schmidt:9,scienc:3,scientif:3,search:3,seed:8,sequenc:11,servic:6,set:[0,1,8,9,10],setstat:8,sever:3,side:[0,7],sigma:8,simann:[3,5],simul:[0,1,3,6,7,9,10,11],simulat:[0,6],sinc:[8,10],singl:[0,6,9,11],site:3,sojourn:[6,7],solut:[0,1,7,9,10,11],solution_progenitor_rng:0,solv:[0,1,3,9,11],solvabl:11,solve_tim:11,solve_time_of_prog_curv:11,solve_time_quantil:11,solve_time_quantiles_ci:11,solve_tol:[1,11],solver:[0,1,2,3,5,7,11],solver_directori:2,solver_factor_head:1,solver_factor_settings_filenam:1,solver_fixed_factor:[1,11],solver_nam:[1,11],soon:4,specif:[0,6,9],specifi:[0,1,6,8,11],springer:8,sscont:[3,5],sscont_min_cost:[3,5],sscontmincost:7,stage:[6,7],standard:[8,11],start:[0,7,8,10],start_fixed_s_ss_sss:8,state:8,statist:[0,1,3,11],std:11,stephan:9,stoch_constraint:[0,7],stochast:[0,7,9],stochastic_constraint:0,stochastic_constraints_gradi:0,stock:[6,10],stockout:[6,7,10],stockout_flag:6,stockout_qti:6,stockout_r:6,storag:0,storage_s:0,store:6,str:6,stream:[3,8],stream_start:8,string:[0,1,6,7,9,11],stylize_area_plot:11,stylize_plot:11,stylize_solvability_plot:11,subclass:8,subject:7,submodul:[3,5],subset:7,substream:8,substream_start:8,subsubstream:8,subsubstream_start:8,summari:[3,5],suppli:[6,10],support:[3,8],system:[3,6,7],take:[0,1,7,9,10,11],techniqu:3,tempor:[6,7],test:3,testb:3,text:10,than:3,them:3,theta:10,thi:[3,6,10],those:3,through:[3,7],throughout:[0,9],tilburg:10,time:[1,3,6,7,10,11],toal:6,tol_index:11,toler:11,total:[6,7,10],trim:11,trim_solver_result:11,triplet:8,tripod:3,tupl:[0,7,8,11],two:[3,11],txt:1,type:[0,1,3,6,7,8,9,11],unconstrain:[0,7,9],under:[1,3,11],underli:3,uniform:[8,10],unit:10,univers:10,unknown:10,unmet:6,unnorm:11,updat:8,upon:3,upper:11,upper_bound:11,use:[0,1,3,6,10,11],used:[0,1,6,7,9,11],user:[0,1,3,11],using:[0,3,8],valid:[0,6,9],valu:[0,1,7,8,11],vari:1,variabl:[0,3,6,7,9,10],variable_typ:[0,7,9],variat:[6,8],varieti:3,vector:[0,7,8],vector_to_factor_dict:[0,7],verbatim:10,veri:3,via:[8,11],view:3,violat:6,w911nf:3,wait:6,warmup:6,websit:3,were:3,when:[0,1,6,9,11],whether:0,which:[0,1,6,7,8,10,11],who:6,width:11,winter:3,work:3,worth:6,wrapper_bas:[1,3,5],write:[1,11],xii:6,you:3,zero:0},titles:["base module","data_farming_base module","directory module","Welcome to SimOpt\u2019s documentation!","Instructions","simopt","oracles package","problems package","rng package","solvers package","(s,S) Inventory System","wrapper_base module"],titleterms:{acknowledg:3,base:0,cntnv:6,cntnv_max_profit:7,content:[3,6,7,8,9],data_farming_bas:1,directori:2,document:3,facilitys:6,facilitysizing_totalcost:7,indic:3,instruct:4,inventori:10,list:[0,2,8,11],matmodop:8,mm1_min_mean_sojourn_tim:7,mm1queue:6,modul:[0,1,2,6,7,8,9,11],mrg32k3a:8,oracl:6,packag:[6,7,8,9],problem:7,randomsearch:9,rmitd:6,rmitd_maxrevenu:7,rng:8,simann:9,simopt:[3,5],solver:9,sscont:6,sscont_min_cost:7,submodul:[6,7,8,9],summari:[0,2,6,7,8,9,11],system:10,tabl:3,welcom:3,wrapper_bas:11}})