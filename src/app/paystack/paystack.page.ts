import { AlertController, ToastController } from '@ionic/angular';
import { Buynow4PageModule } from './../buynow4/buynow4.module';
import { Customer } from './../class/customer';
import { Component, OnInit } from '@angular/core';
import { NovasonLifeService } from '../novason-life.service';

@Component({
  selector: 'app-paystack',
  templateUrl: './paystack.page.html',
  styleUrls: ['./paystack.page.scss'],
})
export class PaystackPage implements OnInit {
  public benefit: any = [];
  public plan: any = [];
  public user: Customer;
  public totalPay: number = 0;
  constructor(private _service: NovasonLifeService, public alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
    this._service.customerGetSession().then(val => {
      this.user = JSON.parse(val);
      this.getPlans();
    });
  }

  getPlans() {
    this.totalPay = 0;
    this._service.getAllPlans().subscribe(val => {
      this.plan = val;
      for (let i = 0; i < Object.keys(val).length; i++) {
        if (this.plan[i].customer_id == this.user.id) {
          if (this.plan[i].name == 'Cash Payout' && this.plan[i].isactive) {
            if (this.plan[i].type == "Single") {
              if (this.user.ageRange == "18-65") {
                //Single "18-65" premium_amount if
                if (this.plan[i].premium_amount == 5000) {
                  this.totalPay += 40;
                  for (let j = 0; j < Object.keys(val).length; j++) {
                    if (this.plan[j].customer_id == this.user.id) {
                      if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                        this.totalPay += 75;
                      }
                      if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 10000 && this.plan[j].isactive) {
                        this.totalPay += 100;
                      }
                      if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 7000 && this.plan[j].isactive) {
                        this.totalPay += 50;
                      }
                      if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                        this.totalPay += 300;
                      }
                      if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                        this.totalPay += 170;
                      }
                    }
                  }
                } else {
                  if (this.plan[i].premium_amount <= 7000) {
                    this.totalPay += 50;
                    for (let j = 0; j < Object.keys(val).length; j++) {
                      if (this.plan[j].customer_id == this.user.id) {
                        if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                          this.totalPay += 75;
                        }
                        if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 10000 && this.plan[j].isactive) {
                          this.totalPay += 100;
                        }
                        if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 7000 && this.plan[j].isactive) {
                          this.totalPay += 50;
                        }
                        if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                          this.totalPay += 300;
                        }
                        if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                          this.totalPay += 170;
                        }
                      }
                    }
                  } else {
                    if (this.plan[i].premium_amount == 8000) {
                      this.totalPay += 60;
                      for (let j = 0; j < Object.keys(val).length; j++) {
                        if (this.plan[j].customer_id == this.user.id) {
                          if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                            this.totalPay += 75;
                          }
                          if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 10000 && this.plan[j].isactive) {
                            this.totalPay += 100;
                          }
                          if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 7000 && this.plan[j].isactive) {
                            this.totalPay += 50;
                          }
                          if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                            this.totalPay += 300;
                          }
                          if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                            this.totalPay += 170;
                          }
                        }
                      }
                    } else {
                      if (this.plan[i].premium_amount == 9000) {
                        this.totalPay += 70;
                        for (let j = 0; j < Object.keys(val).length; j++) {
                          if (this.plan[j].customer_id == this.user.id) {
                            if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                              this.totalPay += 75;
                            }
                            if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 10000 && this.plan[j].isactive) {
                              this.totalPay += 100;
                            }
                            if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 7000 && this.plan[j].isactive) {
                              this.totalPay += 50;
                            }
                            if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                              this.totalPay += 300;
                            }
                            if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                              this.totalPay += 170;
                            }
                          }
                        }
                      } else {
                        if (this.plan[i].premium_amount == 10000) {
                          this.totalPay += 100;
                          for (let j = 0; j < Object.keys(val).length; j++) {
                            if (this.plan[j].customer_id == this.user.id) {
                              if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                                this.totalPay += 75;
                              }
                              if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 10000 && this.plan[j].isactive) {
                                this.totalPay += 100;
                              }
                              if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 7000 && this.plan[j].isactive) {
                                this.totalPay += 50;
                              }
                              if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                this.totalPay += 300;
                              }
                              if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                this.totalPay += 170;
                              }
                            }
                          }
                        } else {
                          if (this.plan[i].premium_amount <= 15000) {
                            this.totalPay += 120;
                            for (let j = 0; j < Object.keys(val).length; j++) {
                              if (this.plan[j].customer_id == this.user.id) {
                                if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                                  this.totalPay += 75;
                                }
                                if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 10000 && this.plan[j].isactive) {
                                  this.totalPay += 100;
                                }
                                if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 7000 && this.plan[j].isactive) {
                                  this.totalPay += 50;
                                }
                                if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                  this.totalPay += 300;
                                }
                                if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                  this.totalPay += 170;
                                }
                              }
                            }
                          } else {
                            if (this.plan[i].premium_amount <= 20000) {
                              this.totalPay += 190;
                              for (let j = 0; j < Object.keys(val).length; j++) {
                                if (this.plan[j].customer_id == this.user.id) {
                                  if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                                    this.totalPay += 75;
                                  }
                                  if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 10000 && this.plan[j].isactive) {
                                    this.totalPay += 100;
                                  }
                                  if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 7000 && this.plan[j].isactive) {
                                    this.totalPay += 50;
                                  }
                                  if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                    this.totalPay += 300;
                                  }
                                  if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                    this.totalPay += 170;
                                  }
                                }
                              }
                            } else {
                              if (this.plan[i].premium_amount <= 30000) {
                                this.totalPay += 240;
                                for (let j = 0; j < Object.keys(val).length; j++) {
                                  if (this.plan[j].customer_id == this.user.id) {
                                    if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                                      this.totalPay += 75;
                                    }
                                    if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 10000 && this.plan[j].isactive) {
                                      this.totalPay += 100;
                                    }
                                    if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 7000 && this.plan[j].isactive) {
                                      this.totalPay += 50;
                                    }
                                    if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                      this.totalPay += 300;
                                    }
                                    if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                      this.totalPay += 170;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                //Single "18-65" end of premium_amount if                
              } else {
                if (this.user.ageRange == "66-74") {
                  //Single "66-74" premium_amount if
                  if (this.plan[i].premium_amount == 5000) {
                    this.totalPay += 90;
                    for (let j = 0; j < Object.keys(val).length; j++) {
                      if (this.plan[j].customer_id == this.user.id) {
                        if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                          this.totalPay += 160;
                        }
                        if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                          this.totalPay += 300;
                        }
                        if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                          this.totalPay += 170;
                        }
                      }
                    }
                  } else {
                    if (this.plan[i].premium_amount <= 7000) {
                      this.totalPay += 124;
                      for (let j = 0; j < Object.keys(val).length; j++) {
                        if (this.plan[j].customer_id == this.user.id) {
                          if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                            this.totalPay += 160;
                          }
                          if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                            this.totalPay += 300;
                          }
                          if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                            this.totalPay += 170;
                          }
                        }
                      }
                    } else {
                      if (this.plan[i].premium_amount == 8000) {
                        this.totalPay += 140;
                        for (let j = 0; j < Object.keys(val).length; j++) {
                          if (this.plan[j].customer_id == this.user.id) {
                            if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                              this.totalPay += 160;
                            }
                            if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                              this.totalPay += 300;
                            }
                            if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                              this.totalPay += 170;
                            }
                          }
                        }
                      } else {
                        if (this.plan[i].premium_amount == 9000) {
                          this.totalPay += 154;
                          for (let j = 0; j < Object.keys(val).length; j++) {
                            if (this.plan[j].customer_id == this.user.id) {
                              if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                                this.totalPay += 160;
                              }
                              if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                this.totalPay += 300;
                              }
                              if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                this.totalPay += 170;
                              }
                            }
                          }
                        } else {
                          if (this.plan[i].premium_amount == 10000) {
                            this.totalPay += 172;
                            for (let j = 0; j < Object.keys(val).length; j++) {
                              if (this.plan[j].customer_id == this.user.id) {
                                if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                                  this.totalPay += 160;
                                }
                                if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                  this.totalPay += 300;
                                }
                                if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                  this.totalPay += 170;
                                }
                              }
                            }
                          } else {
                            if (this.plan[i].premium_amount <= 15000) {
                              this.totalPay += 262;
                              for (let j = 0; j < Object.keys(val).length; j++) {
                                if (this.plan[j].customer_id == this.user.id) {
                                  if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                                    this.totalPay += 160;
                                  }
                                  if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                    this.totalPay += 300;
                                  }
                                  if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                    this.totalPay += 170;
                                  }
                                }
                              }
                            } else {
                              if (this.plan[i].premium_amount <= 20000) {
                                this.totalPay += 344;
                                for (let j = 0; j < Object.keys(val).length; j++) {
                                  if (this.plan[j].customer_id == this.user.id) {
                                    if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                                      this.totalPay += 160;
                                    }
                                    if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                      this.totalPay += 300;
                                    }
                                    if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                      this.totalPay += 170;
                                    }
                                  }
                                }
                              } else {
                                if (this.plan[i].premium_amount <= 30000) {
                                  this.totalPay += 462;
                                  for (let j = 0; j < Object.keys(val).length; j++) {
                                    if (this.plan[j].customer_id == this.user.id) {
                                      if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                                        this.totalPay += 160;
                                      }
                                      if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                        this.totalPay += 300;
                                      }
                                      if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                        this.totalPay += 170;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  //Single "66-74" end of premium_amount if
                } else {
                  if (this.user.ageRange == "75-85") {
                    //Single "75-85" premium_amount if
                    if (this.plan[i].premium_amount == 5000) {
                      this.totalPay += 164;
                      for (let j = 0; j < Object.keys(val).length; j++) {
                        if (this.plan[j].customer_id == this.user.id) {
                          if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                            this.totalPay += 300;
                          }
                          if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                            this.totalPay += 170;
                          }
                        }
                      }
                    } else {
                      if (this.plan[i].premium_amount <= 7000) {
                        this.totalPay += 216;
                        for (let j = 0; j < Object.keys(val).length; j++) {
                          if (this.plan[j].customer_id == this.user.id) {
                            if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                              this.totalPay += 300;
                            }
                            if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                              this.totalPay += 170;
                            }
                          }
                        }
                      } else {
                        if (this.plan[i].premium_amount == 8000) {
                          this.totalPay += 246;
                          for (let j = 0; j < Object.keys(val).length; j++) {
                            if (this.plan[j].customer_id == this.user.id) {
                              if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                this.totalPay += 300;
                              }
                              if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                this.totalPay += 170;
                              }
                            }
                          }
                        } else {
                          if (this.plan[i].premium_amount == 9000) {
                            this.totalPay += 278;
                            for (let j = 0; j < Object.keys(val).length; j++) {
                              if (this.plan[j].customer_id == this.user.id) {
                                if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                  this.totalPay += 300;
                                }
                                if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                  this.totalPay += 170;
                                }
                              }
                            }
                          } else {
                            if (this.plan[i].premium_amount == 10000) {
                              this.totalPay += 310;
                              for (let j = 0; j < Object.keys(val).length; j++) {
                                if (this.plan[j].customer_id == this.user.id) {
                                  if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                    this.totalPay += 300;
                                  }
                                  if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                    this.totalPay += 170;
                                  }
                                }
                              }
                            } else {
                              if (this.plan[i].premium_amount <= 15000 || this.plan[i].premium_amount > 15000) {
                                this.totalPay += 392;
                                for (let j = 0; j < Object.keys(val).length; j++) {
                                  if (this.plan[j].customer_id == this.user.id) {
                                    if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                      this.totalPay += 300;
                                    }
                                    if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                      this.totalPay += 170;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    //Single "75-85" end of premium_amount if
                  } else {
                    if (this.user.ageRange == "86-90") {
                      //Single "86-90" premium_amount if
                      if (this.plan[i].premium_amount == 5000) {
                        this.totalPay += 290;
                        for (let j = 0; j < Object.keys(val).length; j++) {
                          if (this.plan[j].customer_id == this.user.id) {
                            if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                              this.totalPay += 300;
                            }
                            if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                              this.totalPay += 170;
                            }
                          }
                        }
                      } else {
                        if (this.plan[i].premium_amount <= 10000 || this.plan[i].premium_amount > 10000) {
                          this.totalPay += 390;
                          for (let j = 0; j < Object.keys(val).length; j++) {
                            if (this.plan[j].customer_id == this.user.id) {
                              if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                this.totalPay += 300;
                              }
                              if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                this.totalPay += 170;
                              }
                            }
                          }
                        }
                      }
                    }
                    //Single "86-90" end of premium_amount if
                  }
                }
              }
            } else {
              if (this.user.ageRange == "18-65") {
                //Family "18-65" premium_amount if
                if (this.plan[i].premium_amount == 5000) {
                  this.totalPay += 50;
                  for (let j = 0; j < Object.keys(val).length; j++) {
                    if (this.plan[j].customer_id == this.user.id) {
                      if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                        this.totalPay += 100;
                      }
                      if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 10000 && this.plan[j].isactive) {
                        this.totalPay += 100;
                      }
                      if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 7000 && this.plan[j].isactive) {
                        this.totalPay += 50;
                      }
                      if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                        this.totalPay += 300;
                      }
                      if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                        this.totalPay += 250;
                      }
                    }
                  }
                } else {
                  if (this.plan[i].premium_amount <= 7000) {
                    this.totalPay += 66;
                    for (let j = 0; j < Object.keys(val).length; j++) {
                      if (this.plan[j].customer_id == this.user.id) {
                        if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                          this.totalPay += 100;
                        }
                        if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 10000 && this.plan[j].isactive) {
                          this.totalPay += 100;
                        }
                        if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 7000 && this.plan[j].isactive) {
                          this.totalPay += 50;
                        }
                        if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                          this.totalPay += 300;
                        }
                        if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                          this.totalPay += 250;
                        }
                      }
                    }
                  } else {
                    if (this.plan[i].premium_amount == 8000) {
                      this.totalPay += 76;
                      for (let j = 0; j < Object.keys(val).length; j++) {
                        if (this.plan[j].customer_id == this.user.id) {
                          if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                            this.totalPay += 100;
                          }
                          if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 10000 && this.plan[j].isactive) {
                            this.totalPay += 100;
                          }
                          if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 7000 && this.plan[j].isactive) {
                            this.totalPay += 50;
                          }
                          if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                            this.totalPay += 300;
                          }
                          if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                            this.totalPay += 250;
                          }
                        }
                      }
                    } else {
                      if (this.plan[i].premium_amount == 9000) {
                        this.totalPay += 90;
                        for (let j = 0; j < Object.keys(val).length; j++) {
                          if (this.plan[j].customer_id == this.user.id) {
                            if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                              this.totalPay += 100;
                            }
                            if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 10000 && this.plan[j].isactive) {
                              this.totalPay += 100;
                            }
                            if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 7000 && this.plan[j].isactive) {
                              this.totalPay += 50;
                            }
                            if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                              this.totalPay += 300;
                            }
                            if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                              this.totalPay += 250;
                            }
                          }
                        }
                      } else {
                        if (this.plan[i].premium_amount == 10000) {
                          this.totalPay += 100;
                          for (let j = 0; j < Object.keys(val).length; j++) {
                            if (this.plan[j].customer_id == this.user.id) {
                              if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                                this.totalPay += 100;
                              }
                              if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 10000 && this.plan[j].isactive) {
                                this.totalPay += 100;
                              }
                              if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 7000 && this.plan[j].isactive) {
                                this.totalPay += 50;
                              }
                              if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                this.totalPay += 300;
                              }
                              if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                this.totalPay += 250;
                              }
                            }
                          }
                        } else {
                          if (this.plan[i].premium_amount <= 15000) {
                            this.totalPay += 140;
                            for (let j = 0; j < Object.keys(val).length; j++) {
                              if (this.plan[j].customer_id == this.user.id) {
                                if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                                  this.totalPay += 100;
                                }
                                if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 10000 && this.plan[j].isactive) {
                                  this.totalPay += 100;
                                }
                                if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 7000 && this.plan[j].isactive) {
                                  this.totalPay += 50;
                                }
                                if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                  this.totalPay += 300;
                                }
                                if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                  this.totalPay += 250;
                                }
                              }
                            }
                          } else {
                            if (this.plan[i].premium_amount <= 20000) {
                              this.totalPay += 200;
                              for (let j = 0; j < Object.keys(val).length; j++) {
                                if (this.plan[j].customer_id == this.user.id) {
                                  if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                                    this.totalPay += 100;
                                  }
                                  if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 10000 && this.plan[j].isactive) {
                                    this.totalPay += 100;
                                  }
                                  if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 7000 && this.plan[j].isactive) {
                                    this.totalPay += 50;
                                  }
                                  if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                    this.totalPay += 300;
                                  }
                                  if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                    this.totalPay += 250;
                                  }
                                }
                              }
                            } else {
                              if (this.plan[i].premium_amount <= 30000) {
                                this.totalPay += 280;
                                for (let j = 0; j < Object.keys(val).length; j++) {
                                  if (this.plan[j].customer_id == this.user.id) {
                                    if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                                      this.totalPay += 100;
                                    }
                                    if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 10000 && this.plan[j].isactive) {
                                      this.totalPay += 100;
                                    }
                                    if (this.plan[j].name == 'Grocery Benefit' && this.plan[j].premium_amount == 7000 && this.plan[j].isactive) {
                                      this.totalPay += 50;
                                    }
                                    if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                      this.totalPay += 300;
                                    }
                                    if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                      this.totalPay += 250;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                //Family "18-65" end of premium_amount if
              } else {
                if (this.user.ageRange == "66-74") {
                  //Family "66-74" premium_amount if
                  if (this.plan[i].premium_amount == 5000) {
                    this.totalPay += 150;
                    for (let j = 0; j < Object.keys(val).length; j++) {
                      if (this.plan[j].customer_id == this.user.id) {
                        if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                          this.totalPay += 250;
                        }
                        if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                          this.totalPay += 300;
                        }
                        if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                          this.totalPay += 250;
                        }
                      }
                    }
                  } else {
                    if (this.plan[i].premium_amount <= 7000) {
                      this.totalPay += 210;
                      for (let j = 0; j < Object.keys(val).length; j++) {
                        if (this.plan[j].customer_id == this.user.id) {
                          if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                            this.totalPay += 250;
                          }
                          if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                            this.totalPay += 300;
                          }
                          if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                            this.totalPay += 250;
                          }
                        }
                      }
                    } else {
                      if (this.plan[i].premium_amount == 8000) {
                        this.totalPay += 240;
                        for (let j = 0; j < Object.keys(val).length; j++) {
                          if (this.plan[j].customer_id == this.user.id) {
                            if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                              this.totalPay += 250;
                            }
                            if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                              this.totalPay += 300;
                            }
                            if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                              this.totalPay += 250;
                            }
                          }
                        }
                      } else {
                        if (this.plan[i].premium_amount == 9000) {
                          this.totalPay += 268;
                          for (let j = 0; j < Object.keys(val).length; j++) {
                            if (this.plan[j].customer_id == this.user.id) {
                              if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                                this.totalPay += 250;
                              }
                              if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                this.totalPay += 300;
                              }
                              if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                this.totalPay += 250;
                              }
                            }
                          }
                        } else {
                          if (this.plan[i].premium_amount == 10000) {
                            this.totalPay += 294;
                          } else {
                            if (this.plan[i].premium_amount <= 15000 || this.plan[i].premium_amount > 15000) {
                              this.totalPay += 444;
                              for (let j = 0; j < Object.keys(val).length; j++) {
                                if (this.plan[j].customer_id == this.user.id) {
                                  if (this.plan[j].name == 'Beef Benefit' && this.plan[j].isactive) {
                                    this.totalPay += 250;
                                  }
                                  if (this.plan[j].name == 'Catering Benefit' && this.plan[j].isactive) {
                                    this.totalPay += 300;
                                  }
                                  if (this.plan[j].name == 'Burial Cover' && this.plan[j].isactive) {
                                    this.totalPay += 250;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  //Family "66-74" end of premium_amount if
                }
              }
            }
          }
        }
      }
    })
  }

  CancelPolicy(policy: Buynow4PageModule) {
    //deactivate all policy with its benefits
    this.presentAlert("policy", policy);
    this.getPlans();
  }

  CancelBenefit(benefit: Buynow4PageModule) {
    //deactivate benefits
    this.presentAlert(benefit.name + " from your policy", benefit);
    this.getPlans();
  }

  ActivateBenefit(benefit: Buynow4PageModule) {
    benefit.isactive = true
    this._service.putInsurancePlan(benefit).subscribe(res => {
      this.presentToast("Benefit");
      this.getPlans();
    });
  }

  ActivatePolicy(policy: Buynow4PageModule) {
    policy.isactive = true
    this._service.putInsurancePlan(policy).subscribe(res => {
      this.presentToast("Policy");
      this.getPlans();
    });
  }

  async presentAlert(rec: string, policy: Buynow4PageModule) {
    const alert = await this.alertController.create({
      header: 'Payment',
      message: 'Are you sure you want to remove ' + rec + "?",
      buttons: [
        {
          text: 'Yes',
          role: 'cancel',
          handler: (blah) => {
            policy.isactive = false
            this._service.putInsurancePlan(policy).subscribe(res => {
              this.getPlans();
            });
          }
        }, {
          text: 'No',
        }
      ]
    });
    await alert.present();
  }

  async presentToast(benefit: string) {
    const toast = await this.toastController.create({
      message: benefit + " successfuly activated!",
      duration: 7000,
      showCloseButton: true,
      closeButtonText: "Close",
      color: "primary"
    });
    toast.present();
  }
}
