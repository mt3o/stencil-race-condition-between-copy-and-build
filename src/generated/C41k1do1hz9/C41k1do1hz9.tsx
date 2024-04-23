
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-41k1do1hz9',
  shadow: true,
})
export class C41k1do1hz9 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  