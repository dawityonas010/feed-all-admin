<template>
    <div>
        <div id="left" class="box">
    <div class="box__header">
      <h2 class="box__header-title">Total Balance</h2>
    </div>
    <div class="box__body">
      <div class="stats stats--main">
        <div class="stats__amount">{{balance}}</div>
        <div class="stats__caption">Ethiopian Birr</div>
        <div class="stats__change">
          <div class="stats__value stats__value--positive">+6%</div>
          <div class="stats__period">this week</div>
        </div>
      </div>
    </div>
  </div>
    <div id="Transactions">
        <!--Review TABLE-->
       <v-container fluid>
            <v-layout row justify-center>
            <v-flex md11 xs12>
                <v-card>
                    <v-card-title class="headline brown darken-2 white--text">Transactions</v-card-title>
                    <v-data-table v-bind:headers="tableHeaders" :items="transactions" hide-actions class="elevation-1">
                        <template slot="items" slot-scope="props">
                            <td class="text-xs-right">{{ props.item.enitiy_name }}</td>
                            <td class="text-xs-right">{{ props.item.amount }}</td>
                            <td class="text-xs-right">{{ props.item.payment_system }}</td>
                            <td class="text-xs-right">
                                <!-- <v-btn icon @click="startEdit(props.item)"><v-icon>fa-pencil</v-icon></v-btn> -->
                                <!-- <v-btn icon  @click="deleteTransaction(props.item)"><v-icon>fa-times</v-icon></v-btn> -->
                            </td>
                        </template>
                    </v-data-table>
                </v-card>
            </v-flex>
        </v-layout>
       </v-container>
        <v-btn color="brown darken-2" dark fixed bottom right fab @click.native.stop="newTransactionDialog = !newTransactionDialog">
            <v-icon>fa-plus</v-icon>
        </v-btn>
        <!--NEW SERVICE MODAL-->
            <v-layout row justify-center>
            <v-dialog  v-model="newTransactionDialog" persistent max-width="500px">
            <v-card>
                <v-card-title>
                <span v-if="!editOn" class="headline">Create New transaction</span>
                <span v-else class="headline">Edit transaction</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-form v-model="valid" ref="transactionForm" lazy-validation>
                                    <v-text-field name="enitiy_name" label="enitiy_name" v-model="createNewTransaction.enitiy_name" required 
                                    :rules="[v => !!v || 'Item is required']"></v-text-field>
                                    <v-text-field textarea name="payment_sysytem" label="payment_sysytem" v-model="createNewTransaction.payment_system" required 
                                    :rules="[v => !!v || 'Item is required']"></v-text-field>
                                    <v-text-field type="number" name="amount" label="amount" v-model="createNewTransaction.amount" required 
                                    :rules="[v => !!v || 'Item is required']"></v-text-field>
                                </v-form>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="resetNewTransaction()">Cancel</v-btn>
                <v-btn v-if="!editOn" color="teal darken-1" flat @click.native="CreateNewTransaction()" :disabled="!valid">Submit</v-btn>
                <v-btn v-else color="teal darken-1" flat @click.native="updateTransaction()" :disabled="!valid">Submit</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-layout>
    </div>
    </div>
</template>

<script>
import firebase from './firebaseInit'
import 'firebase/firestore'
const db = firebase.firestore()
const storageRef = firebase.storage().ref()
export default {
  name: 'Transactions',
  data () {
    return {
        newTransactionDialog: false,
        valid: true,
        createNewTransaction: {
            enitiy_name: null,
            payment_type: null,
            amount:null
        },
        tableHeaders: [
            {text:"Name", value: "enitiy_name"},
            {text:"Amount", value: "amount"},
            {text:"Payment system", value: "payment_system"}
        ],
        transactions: [],
        balance : 1000,
        transactionsLoading:false,
        editOn:false
    }
  },
  methods:{
    listTransactions(){
        this.transactionsLoading = true
        this.transactions=[]
        db.collection('transactions').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {
                        'enitiy_name':doc.data().enitiy_name,
                        'amount':doc.data().amount,
                        'payment_system':doc.data().payment_system == 3 ? "SMS Mobile Donation" : "Bank Donation"
                    }
                    this.transactions.push(data)
                })
        })
        db.collection('balance').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {
                        'amount':doc.data().amount,
                    }
                    this.balance = data.amount
                })
        })
        this.transactionsLoading = false
    },
    resetNewTransaction(){
        this.createNewTransaction= {
            enitiy_name: null,
            payment_type: null,
            amount:null
        }
        this.editOn=false
        this.newTransactionDialog=false
        this.$refs.transactionForm.reset()
    },
    startEdit(transaction){
        this.createNewTransaction= {
            enitiy_name: null,
            payment_type: null,
            amount:null
        }
        this.editOn = true
        this.newTransactionDialog =true
    },
    updateTransaction(){
        if( !this.createNewTransaction.enitiy_name|| !this.createNewTransaction.payment || !this.createNewTransaction.amount)
            return
            const docRef = db.collection('transactions').doc(this.createNewTransaction.id)
            docRef.set({
                enitiy_name: this.createNewTransaction.enitiy_name,
                payment_type: this.createNewTransaction.payment_system,
                amount: this.createNewTransaction.amount
            })
            .then( (doc)=> {
                this.listTransactions()
                console.log("Document successfully written!", doc)
                this.resetNewTransaction()
            })
            .catch(()=> {
            console.error("Error writing document: ", error)
            })
        },     
        deleteTransaction(transaction){
        if(confirm("Are you sure?")){
        db.collection('transactions').doc(transaction.id).delete()
        .then(data => {
            this.listTransactions()
            console.log("Document successfully deleted!");
        }).catch(error => {
            console.error("Error removing document: ", error);
        })
      }
    },
    processFiles(event) {
        this.createNewTransaction.profilePhoto = event.target.files
    },
    CreateNewTransaction(){
        db.collection('transactions').add({
                enitiy_name: this.createNewTransaction.enitiy_name,
                payment_type: eval(this.createNewTransaction.payment_system),
                amount: eval(this.createNewTransaction.amount)
            })
        .then(docRef => {
                this.listTransactions()
                this.resetNewTransaction()
                this.newTransactionDialog = false
            })
        .catch(error => console.log(err))
        }
    },
    created(){
        this.listTransactions()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-preview{
  width: 120px;
  height: 120px;
  object-fit:cover;
}


.box {
	background: linear-gradient(#2b9966, #083110);
	margin: 15px auto 0;
	border-radius: 5px;
    width: 500px;
    position: relative;
}

.box__header {
	padding: 15px 25px;
	position: relative;
}

.box__header-title {
	color: #fff;
	font-size: 18px;
}

.box__body {
	padding: 0 25px;
}

/* STATS */

.stats {
	color: #fff;
	position: relative;
	padding-bottom: 25px;
}

.stats__amount {
	font-size: 42px;
	font-weight: bold;
	line-height: 1.2;
}

.stats__caption {
	font-size: 18px;

}

.stats__change {
	position: absolute;
	top: 10px;
	right: 0;
	text-align: right;
	color: #B1B7C8;
}

.stats__value {
	font-size: 18px;
}

.stats__period {
	font-size: 14px;
}

.stats__value--positive {
	color: #AEDC6F;
}

.stats__value--negative {
	color: #FB5055;
}

.stats--main .stats__amount {
	font-size: 54px;
}
</style>
